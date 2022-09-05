import React from 'react'
import styled from 'styled-components'
import { ActionButton } from '../../../UI/Button'
import DatePickerComponent from '../../../UI/DatePicker'
import Select from '../../../UI/Select'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const SearchHeader = (props) => {
  return (
    <Container>
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
      <Select defaultOption="모든지역" options={['A', 'B', 'C', 'D']} />
      <Select defaultOption="종류" options={['개', '고양이', '기타']} />

      <DatePickerComponent width={180} />
      <DatePickerComponent width={180} />

      <ActionButton>Search</ActionButton>
    </Container>
  )
}

export default SearchHeader
