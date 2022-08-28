import React from 'react'
import './Search.css'
import { ActionButton } from '../../UI/Button'
import Select from '../../UI/Select'

const Search = (props) => {
  return (
    <>
      <div className="searchBar">
        <label>
          <Select
            defaultOption="전국"
            options={[
              '서울특별시',
              '부산광역시',
              '인천광역시',
              '광주광역시',
              '세종특별자치시',
              '대전광역시',
              '울산광역시',
              '경기도',
              '강원도',
              '충청북도',
              '충청남도',
              '전라북도',
              '전라남도',
              '경상북도',
              '경상남도',
              '제주특별자치도',
            ]}
          />
        </label>
        <label>
          <Select defaultOption="모든지역" options={['A', 'B', 'C', 'D']} />
        </label>
        <label>
          <Select defaultOption="종류" options={['개', '고양이', '기타']} />
        </label>

        <input type="date" />

        <input type="date" />

        <ActionButton>Search</ActionButton>
      </div>

      <div id="columns">
        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg" alt="cinderella" />
          <figcaption>Cinderella wearing European fashion of the mid-1860’s</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg" alt="rapunzel" />
          <figcaption>Rapunzel, clothed in 1820’s period fashion</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg" alt="belle" />
          <figcaption>Belle, based on 1770’s French court fashion</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg" alt="mulan_2" />
          <figcaption>Mulan, based on the Ming Dynasty period</figcaption>
        </figure>

        <figure>
          <img
            src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg"
            alt="sleeping-beauty"
          />
          <figcaption>Sleeping Beauty, based on European fashions in 1485</figcaption>
        </figure>

        <figure>
          <img
            src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg"
            alt="pocahontas_2"
          />
          <figcaption>Pocahontas based on 17th century Powhatan costume</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg" alt="snow-white" />
          <figcaption>Snow White, based on 16th century German fashion</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg" alt="ariel" />
          <figcaption>Ariel wearing an evening gown of the 1890’s</figcaption>
        </figure>

        <figure>
          <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg" alt="tiana" />
          <figcaption>
            Tiana wearing the <i>robe de style</i> of the 1920’s
          </figcaption>
        </figure>
      </div>
    </>
  )
}

export default Search
