import {
  faComment,
  faHandHoldingHeart,
  faHouse,
  faLocationDot,
  faSearch,
  faTag,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropType from 'prop-types'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LogoTitle } from '../../../UI/Text'
import Footer from './Footer'

const Container = styled.div`
  position: fixed;
  top: 0;
  color: #fff;
  width: 250px;
  padding-left: 20px;
  height: 100vh;
  background-image: linear-gradient(30deg, #0048bd, #44a7fd);
  border-top-right-radius: 80px;
`

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li`
  font-size: 12px;
  color: #fff;
  display: block;
  padding: 12px 12px 12px 30px;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  &:hover {
    color: #3f5efb;
    background: #fff;
    outline: none;
    position: relative;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`

const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  width: 15px;
`

const menus = [
  { link: '/search', title: '검색', icon: faSearch },
  { link: '/map', title: '지도', icon: faLocationDot },
  { link: '/find', title: '찾아주세요', icon: faComment },
  { link: '/care', title: '보호중입니다', icon: faHouse },
  { link: '/support', title: '후원하기', icon: faHandHoldingHeart },
  { link: '/tag', title: '태그', icon: faTag },
]

const SideBar = (props) => {
  const { className } = props
  const navigate = useNavigate()

  const handleClick = useCallback(
    (link) => {
      navigate(link, { replace: false })
    },
    [navigate],
  )

  return (
    <Container className={className}>
      <LogoTitle onClick={() => handleClick('/')}>Pet Finder</LogoTitle>
      <MenuList>
        {menus.map((menu, menuIndex) => (
          <MenuItem key={menuIndex} onClick={() => handleClick(menu.link)}>
            <MenuIcon icon={menu.icon} />
            {menu.title}
          </MenuItem>
        ))}
      </MenuList>
      <Footer isLogin={false} />
    </Container>
  )
}

React.PropType = {
  className: PropType.string,
}

export default SideBar
