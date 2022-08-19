import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from 'prop-types'
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 0;
`
const TopLinkIcon = styled(FontAwesomeIcon)`
  width: 14px;
  height: 14px;
  font-size: 14px;
  position: fixed;
  color: #fff;
  background: #0077B5;
  padding: 10px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
`

const TopLink = props => {
  const { className } = props
  return (
    <Container className={className}>
      <TopLinkIcon icon={faLink}/>
    </Container>
  )
}

React.PropType = {
  className: PropType.string
}

export default TopLink