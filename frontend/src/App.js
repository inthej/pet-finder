import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHandHoldingHeart,
  faHouse,
  faLink,
  faLocationDot,
  faSearch,
  faTag
} from "@fortawesome/free-solid-svg-icons";
import './App.css';

function App() {
  return (
    <>
      <div className="sidebar">
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

      <div className="toplink">
        <FontAwesomeIcon icon={faLink} className="icon"/>
      </div>

      <div className="content">
        <h2>펫을 찾아요</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aspernatur debitis doloribus fugit id illum quaerat quod tempore veniam? Earum error id illo ipsum non perspiciatis sapiente sit tempora.</p>
      </div>
    </>
  );
}

export default App;
