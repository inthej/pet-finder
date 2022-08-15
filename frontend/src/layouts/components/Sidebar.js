import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../App.css'
import {
  faComment,
  faHandHoldingHeart,
  faHouse,
  faLocationDot,
  faSearch,
  faTag
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = props => {
  const { className } = props
  return (
    <div className={className}>
      <p>Pet Finder</p>
      <ul>
        <li><FontAwesomeIcon icon={faSearch} className="icon"/>검색</li>
        <li><FontAwesomeIcon icon={faLocationDot} className="icon"/>지도</li>
        <li><FontAwesomeIcon icon={faComment} className="icon"/>찾아주세요</li>
        <li><FontAwesomeIcon icon={faHouse} className="icon"/>보호중입니다</li>
        <li><FontAwesomeIcon icon={faHandHoldingHeart} className="icon"/>후원하기</li>
        <li><FontAwesomeIcon icon={faTag} className="icon"/>태그</li>
      </ul>
      <div className="footer">
        로그인 | 회원가입
        {/*내정보 | 로그아웃*/}
      </div>
    </div>
  )
}

export default Sidebar