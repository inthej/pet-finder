import PropType from 'prop-types'
import React from "react";
import styled from "styled-components";
import '../../../App.css'
import TopLink from "./TopLink";

const Container = styled.div`
  margin-left: 250px;
  padding-top: 20px;
  padding-left: 20px;
`

const Content = props => {
  const { className, children } = props
  return (
    <Container className={className}>
      <TopLink className='toplink'/>
      {children}
    </Container>
  )
}

React.propType = {
  className: PropType.string,
  children: PropType.node
}

export default Content