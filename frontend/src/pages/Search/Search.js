import React from 'react'
import SearchContent from './components/SearchContent'
import SearchHeader from './components/SearchHeader'

const Search = (props) => {
  return (
    <>
      <SearchHeader className="header" />
      <SearchContent className="content" />
    </>
  )
}

export default Search
