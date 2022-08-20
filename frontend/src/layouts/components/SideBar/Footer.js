import PropType from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

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
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/login', { replace: true })
  }

  const handleLogin = () => {
    navigate('/login', { replace: true })
  }

  const handleUserAbout = () => {
    navigate('/user/about', { replace: true })
  }

  const handleSignup = () => {
    navigate('/signup', { replace: true })
  }

  return (
    <Container>
      <MenuList>
        <MenuItem onClick={isLogin ? handleLogout : handleLogin}>
          {isLogin ? '로그아웃' : '로그인'}
        </MenuItem>
        <Delimiter>|</Delimiter>
        <MenuItem onClick={isLogin ? handleUserAbout : handleSignup}>
          {isLogin ? '내정보' : '회원가입'}
        </MenuItem>
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
