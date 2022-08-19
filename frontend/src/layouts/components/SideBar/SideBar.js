import {
  faComment,
  faHandHoldingHeart,
  faHouse,
  faLocationDot,
  faSearch,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropType from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Footer from "./Footer";

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

const Paragraph = styled.p`
  margin: 0;
  padding: 40px 0;
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

const FontIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`

const SideBar = props => {
  const { className } = props
  return (
    <Container className={className}>
      <Paragraph>Pet Finder</Paragraph>
      <MenuList>
        <MenuItem><FontIcon icon={faSearch}/>검색</MenuItem>
        <MenuItem><FontIcon icon={faLocationDot}/>지도</MenuItem>
        <MenuItem><FontIcon icon={faComment}/>찾아주세요</MenuItem>
        <MenuItem><FontIcon icon={faHouse}/>보호중입니다</MenuItem>
        <MenuItem><FontIcon icon={faHandHoldingHeart}/>후원하기</MenuItem>
        <MenuItem><FontIcon icon={faTag}/>태그</MenuItem>
      </MenuList>
      <Footer isLogin={false}/>
    </Container>
  )
}

React.PropType = {
  className: PropType.string
}

export default SideBar