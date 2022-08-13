import './styles/screen.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faList, faLocationDot, faSearch, faTag} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <aside>
        <p>반려동물 찾기</p>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faSearch} className="icon"/>
          검색
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faLocationDot} className="icon"/>
          지도
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faList} className="icon"/>
          커뮤니티
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faHeart} className="icon"/>
          후원하기
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faTag} className="icon"/>
          태그
        </a>
      </aside>
      <div className="social">
        <a
          href="http://localhost:3000/"
          // target="_blank"
        >
          <i className="fa fa-linkedin" />
        </a>
      </div>
    </>
  );
}

export default App;
