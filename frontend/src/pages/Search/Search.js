import React from 'react'
import './Search.css'

const Search = (props) => {
  return (
    <>
      <div className="searchArea">
        <h4 className="hide">검색영역</h4>
        <ul className="searchList">
          <li className="first">
            <dl>
              <dt>
                <label htmlFor="searchSDate">날짜</label>
              </dt>
              <dd>
                <input
                  type="date"
                  name="searchSDate"
                  id="searchSDate"
                  className="inputDate"
                  title="시작일"
                  onBlur="$('.calendar').hide();"
                  maxLength="10/"
                />{' '}
                ~{' '}
                <input
                  type="date"
                  name="searchEDate"
                  id="searchEDate"
                  title="마감일"
                  className="inputDate"
                  onBlur="$('.calendar').hide();"
                  maxLength="10/"
                />
                (날짜는 접수일 기준입니다)
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>
                <label htmlFor="searchUprCd">시도</label>
              </dt>
              <dd>
                <select name="searchUprCd" id="searchUprCd" title="시도선택" className="selectM">
                  <option value="">전체</option>

                  <option value="6110000">서울특별시</option>

                  <option value="6260000">부산광역시</option>

                  <option value="6270000">대구광역시</option>

                  <option value="6280000">인천광역시</option>

                  <option value="6290000">광주광역시</option>

                  <option value="5690000">세종특별자치시</option>

                  <option value="6300000">대전광역시</option>

                  <option value="6310000">울산광역시</option>

                  <option value="6410000">경기도</option>

                  <option value="6420000">강원도</option>

                  <option value="6430000">충청북도</option>

                  <option value="6440000">충청남도</option>

                  <option value="6450000">전라북도</option>

                  <option value="6460000">전라남도</option>

                  <option value="6470000">경상북도</option>

                  <option value="6480000">경상남도</option>

                  <option value="6500000">제주특별자치도</option>
                </select>
              </dd>
            </dl>
            <dl>
              <dt>
                <label htmlFor="searchOrgCd">시군구</label>
              </dt>
              <dd>
                <select name="searchOrgCd" id="searchOrgCd" title="시군구선택" className="selectM">
                  <option value="">전체</option>
                </select>
              </dd>
            </dl>
            <dl>
              <dt>
                <label htmlFor="searchCareRegNo">보호센터</label>
              </dt>
              <dd>
                <select
                  name="searchCareRegNo"
                  id="searchCareRegNo"
                  title="보호센터선택"
                  className="selectM"
                >
                  <option value="">전체</option>
                </select>
              </dd>
            </dl>
          </li>
          <li className="last">
            <dl>
              <dt>
                <label htmlFor="searchUpKindCd">축종</label>
              </dt>
              <dd>
                <select
                  name="searchUpKindCd"
                  id="searchUpKindCd"
                  title="축종선택"
                  className="selectM"
                >
                  <option value="">전체</option>
                  <option value="417000">개</option>
                  <option value="422400">고양이</option>
                  <option value="429900">기타</option>
                </select>
                <select name="searchKindCd" id="searchKindCd" title="종류선택" className="selectM">
                  <option value="">전체</option>
                </select>
              </dd>
            </dl>
            <dl>
              <dt>
                <label htmlFor="searchSexCd">성별</label>
              </dt>
              <dd>
                <select name="searchSexCd" id="searchSexCd" title="성별선택" className="selectM">
                  <option value="">전체</option>
                  <option value="F">암컷</option>
                  <option value="M">수컷</option>
                  <option value="Q">미상</option>
                </select>
                <a href="javascript:;" id="search_button" className="searchBtn">
                  조회
                </a>
              </dd>
            </dl>
          </li>
        </ul>
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
