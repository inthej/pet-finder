import React from 'react'
import styled from 'styled-components'
import { color, font } from '../Theme'

const BasicStyle = styled.button`
  background-color: ${color.gray};
  border: none;
  border-radius: 3px;
  color: ${color.black};
  //padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${font.button1.size};
  line-height: ${font.button1.line};
  margin: 0 5px 5px 0;
  cursor: pointer;
  width: 150px;
  height: 36px;
`

const ActionStyle = styled(BasicStyle)`
  background-color: ${color.green}; /* Green */
  color: ${color.white};
`

const SolidStyle = styled(BasicStyle)`
  background-color: ${color.blue}; /* Blue */
  color: ${color.white};
`

const CancelStyle = styled(BasicStyle)`
  background-color: ${color.red}; /* Red */
  color: ${color.white};
`

const GhostStyle = styled(BasicStyle)`
  background-color: ${color.black}; /* Black */
  color: ${color.white};
`

export const BasicButton = ({ children, ...rest }) => {
  return <BasicStyle {...rest}>{children}</BasicStyle>
}

export const ActionButton = ({ children, ...rest }) => {
  return <ActionStyle {...rest}>{children}</ActionStyle>
}

export const SolidButton = ({ children, ...rest }) => {
  return <SolidStyle {...rest}>{children}</SolidStyle>
}

export const CancelButton = ({ children, ...rest }) => {
  return <CancelStyle {...rest}>{children}</CancelStyle>
}

export const GhostButton = ({ children, ...rest }) => {
  return <GhostStyle {...rest}>{children}</GhostStyle>
}
