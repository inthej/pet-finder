import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropType from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import AppConstants from '../../../common/AppConstants'

const Container = styled.div`
  height: 0;
`
const TopLinkIcon = styled(FontAwesomeIcon)`
  width: 14px;
  height: 14px;
  font-size: 14px;
  position: fixed;
  color: #fff;
  background: #0077b5;
  padding: 10px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
  cursor: pointer;
`

const TopLink = (props) => {
  const { className } = props

  const handleClick = () => {
    window.open(AppConstants.TOP_LINK_SITE, '_blank')
  }
  return (
    <Container className={className}>
      <TopLinkIcon icon={faLink} onClick={handleClick} />
    </Container>
  )
}

React.PropType = {
  className: PropType.string,
}

export default TopLink
