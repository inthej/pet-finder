import React from 'react'
import './Search.css'

const Search = (props) => {
  return (
    <>
      <div className="searchBar">
        <label>
          <select>
            <option>전 국</option>
            <option>서울특별시</option>
            <option>부산광역시</option>
            <option>대구광역시</option>
            <option>인천광역시</option>
            <option>광주광역시</option>
            <option>세종특별자치시</option>
            <option>대전광역시</option>
            <option>울산광역시</option>
            <option>경기도</option>
            <option>강원도</option>
            <option>충청북도</option>
            <option>충청남도</option>
            <option>전라북도</option>
            <option>전라남도</option>
            <option>경상북도</option>
            <option>경상남도</option>
            <option>제주특별자치도</option>
          </select>
        </label>
        <label>
          <select>
            <option>모든지역</option>
            <option>강릉시</option>
            <option>고성군</option>
            <option>동해시</option>
            <option>삼척시</option>
            <option>속초시</option>
            <option>양구군</option>
            <option>양양군</option>
            <option>영월군</option>
            <option>원주시</option>
            <option>인제군</option>
            <option>정선군</option>
            <option>철원군</option>
            <option>춘천시</option>
            <option>태백시</option>
            <option>평창군</option>
            <option>홍천군</option>
            <option>화천군</option>
            <option>횡성군</option>
          </select>
        </label>
        <label>
          <select>
            <option>종류</option>
            <option>개</option>
            <option>고양이</option>
            <option>기타</option>
          </select>
        </label>

        <input type="date" />

        <input type="date" />

        <input id="search-submit" type="button" value="Search" />
      </div>

      <div id="columns">
        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg" />
          <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg" />
          <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg" />
          <figcaption>Belle, based on 1770’s French court fashion</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg" />
          <figcaption>Mulan, based on the Ming Dynasty period</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg" />
          <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg" />
          <figcaption>Pocahontas based on 17th century Powhatan costume</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg" />
          <figcaption>Snow White, based on 16th century German fashion</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg" />
          <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg" />
          <figcaption>
            Tiana wearing the <i>robe de style</i> of the 1920’s
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default Search
