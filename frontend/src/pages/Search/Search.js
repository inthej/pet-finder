import React, { useEffect, useRef, useState } from 'react'
import validate from 'validate.js'
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
      <SearchContent className="content" />
      <input name="username" value={formState.values.username || ''} onChange={handleChange} />
      <input name="email" value={formState.values.email || ''} onChange={handleChange} />
    </>
  )
}

export default Search
