import React, { useCallback, useEffect, useRef, useState } from 'react'
import validate from 'validate.js'
import AppConstants from '../../common/AppConstants'
import { searchService } from '../../common/services/SearchService'
import LogUtils from '../../common/utils/LogUtils'
import ReactUtils from '../../common/utils/ReactUtils'
import SearchContent from './components/SearchContent'
import SearchHeader from './components/SearchHeader'

const validateConstraints = {
  username: {
    presence: {
      allowEmpty: false,
      message: '이름을 입력 하세요.',
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: '이메일을 입력 하세요.',
    },
  },
}

const Search = (props) => {
  const {} = props

  const [page, setPage] = useState({ page: 1, size: AppConstants.SEARCH_PAGE_SIZE })
  const [animalList, setAnimalList] = useState([])

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  })
  const [loading, setLoading] = useState(false)
  const isMounted = useRef(false)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  const searchAnimalList = useCallback(async () => {
    try {
      setLoading(true)
      const response = await searchService.animals(undefined, page)
      return response
    } catch (err) {
      LogUtils.debug('searchAnimalList err:', err)
      return []
    } finally {
      if (isMounted.current) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    searchAnimalList().then((res) => setAnimalList(res.obj.list))
  }, [searchAnimalList])

  useEffect(() => {
    const errors = validate(formState.values, validateConstraints)
    setFormState((prevState) => ({
      ...prevState,
      isValid: errors ? false : true,
      errors: errors || {},
    }))
  }, [formState.values])

  const handleChange = (event) => {
    ReactUtils.handleChange(event, setFormState)
  }

  return (
    <>
      <SearchHeader className="header" />
      <SearchContent className="content" animalList={animalList} loading={loading} />
    </>
  )
}

export default Search
