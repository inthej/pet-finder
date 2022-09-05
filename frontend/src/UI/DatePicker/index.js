import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components'
import { color } from '../Theme'

const Container = styled.div`
  margin: 0 5px 5px 0;
  padding: 0 30px 0 10px;
  border: 1px solid ${color.gray};
  border-radius: 3px;
  line-height: 36px;
  width: 180px;
  height: 36px;
  background: ${color.white};
`

const StyleDatePicker = styled(DatePicker)`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 14px;
`

const DatePickerComponent = (props) => {
  const { width } = props
  const [startDate, setStartDate] = useState(new Date())
  return (
    <Container style={{ width: width }}>
      <StyleDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </Container>
  )
}

export default DatePickerComponent
