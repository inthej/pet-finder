import PropType from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  column-width: 236px;
  column-gap: 15px;
  width: 100%;
  max-width: 1100px;
  margin: 50px auto;

  @media screen and (max-width: 750px) {
    column-gap: 0px;
  }
`

const Figure = styled.figure`
  background: #fefefe;
  border: 2px solid #fcfcfc;
  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
  margin: 0 2px 15px;
  padding: 15px;
  padding-bottom: 10px;
  transition: opacity 0.4s ease-in-out;
  display: inline-block;
  column-break-inside: avoid;

  :not(:hover) {
    opacity: 0.9;
  }

  @media screen and (max-width: 750px) {
    width: 100%;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 15px;
  margin-bottom: 5px;
`

const Caption = styled.figcaption`
  font-size: 0.9rem;
  color: #444;
  line-height: 1.5;
`

const list = [
  {
    id: 1,
    src: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/cinderella.jpg',
    alt: 'cinderella',
    caption: 'Cinderella wearing European fashion of the mid-1860’s',
  },
  {
    id: 2,
    src: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/rapunzel.jpg',
    alt: 'rapunzel',
    caption: 'Rapunzel, clothed in 1820’s period fashion',
  },
  {
    id: 3,
    src: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/belle.jpg',
    alt: 'belle',
    caption: 'Belle, based on 1770’s French court fashion',
  },
  {
    id: 4,
    src: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mulan_2.jpg',
    alt: 'mulan_2',
    caption: 'Mulan, based on the Ming Dynasty period',
  },
  {
    id: 5,
    src: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sleeping-beauty.jpg',
    alt: 'sleeping-beauty',
    caption: 'Sleeping Beauty, based on European fashions in 1485',
  },
  {
    id: 6,
    src: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/pocahontas_2.jpg',
    alt: 'pocahontas_2',
    caption: 'Pocahontas based on 17th century Powhatan costume',
  },
  {
    id: 7,
    src: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/snow-white.jpg',
    alt: 'snow-white',
    caption: 'Snow White, based on 16th century German fashion',
  },
  {
    id: 8,
    src: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ariel.jpg',
    alt: 'ariel',
    caption: 'Ariel wearing an evening gown of the 1890’s',
  },
  {
    id: 9,
    src: '//s3-us-west-2.amazonaws.com/s.cdpn.io/4273/tiana.jpg',
    alt: 'tiana',
    caption: 'Tiana wearing the robe de style of the 1920’s',
  },
]

const SearchContent = (props) => {
  const { className } = props
  return (
    <Container className={className}>
      {list.map((item) => (
        <Figure key={item.id}>
          <Image src={item.src} alt={item.alt} />
          <Caption>{item.caption}</Caption>
        </Figure>
      ))}
    </Container>
  )
}

React.PropType = {
  className: PropType.string,
}

export default SearchContent
