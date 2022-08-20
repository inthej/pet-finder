import React from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

const Container = styled.div`
  font-size: 12px;
  position: fixed;
  padding: 12px 12px 12px 30px;
  bottom: 20px;
`

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li`
  float: left;
  margin: 5px;
  cursor: pointer;
`

const Delimiter = styled(MenuItem)`
  cursor: default;
`

const Footer = (props) => {
  const { isLogin } = props

  return (
    <Container>
      <MenuList>
        <MenuItem>{isLogin ? '로그아웃' : '로그인'}</MenuItem>
        <Delimiter>|</Delimiter>
        <MenuItem>{isLogin ? '내정보' : '회원가입'}</MenuItem>
      </MenuList>
    </Container>
  )
}

Footer.defaultProps = {
  isLogin: false,
}

React.PropType = {
  isLogin: PropType.bool,
}

export default Footer
