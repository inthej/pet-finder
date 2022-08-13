import './styles/screen.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faDog,
  faHandHoldingHeart,
  faLink,
  faList,
  faLocationDot,
  faSearch,
  faTag
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <aside>
        <p>Pet Finder</p>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faSearch} className="icon"/>
          Search
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faLocationDot} className="icon"/>
          Map
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faList} className="icon"/>
          Community
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faHandHoldingHeart} className="icon"/>
          Support
        </a>
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faTag} className="icon"/>
          Tags
        </a>
      </aside>
      <div className="social">
        <a href="http://localhost:3000/">
          <FontAwesomeIcon icon={faLink} className="social-icon"/>
        </a>
      </div>
    </>
  );
}

export default App;
