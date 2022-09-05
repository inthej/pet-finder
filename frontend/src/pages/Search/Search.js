import React from 'react'
import './Search.css'
import SearchHeader from './components/SearchHeader'

const Search = (props) => {
  return (
    <>
      <SearchHeader />

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
