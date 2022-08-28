import styled from 'styled-components'
import { color } from '../Theme'

const Label = styled.label`
  position: relative;
  display: inline-block;

  :before {
    content: '';
    height: 31px;
    position: absolute;
    right: 7px;
    top: 3px;
    width: 22px;
    background: ${color.white};
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    pointer-events: none;
    display: block;
  }

  :after {
    content: ' ';
    position: absolute;
    right: 15px;
    top: 46%;
    margin-top: -3px;
    z-index: 2;
    pointer-events: none;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 4px 0 4px;
    border-color: #aaa transparent transparent transparent;
  }
`

const Container = styled.select`
  margin: 0 5px 5px 0;
  padding: 0 30px 0 10px;
  border: 1px solid ${color.gray};
  border-radius: 3px;
  line-height: 36px;
  width: 180px;
  height: 36px;
  background: ${color.white};

  ::-ms-expand {
    display: none;
  }
`

const Option = styled.option``

const Select = ({ options, defaultOption, ...rest }) => {
  return (
    <Label>
      <Container {...rest}>
        <Option>{defaultOption ? defaultOption : '전체'}</Option>
        {options.map((text, textIndex) => (
          <Option key={textIndex}>{text}</Option>
        ))}
      </Container>
    </Label>
  )
}

export default Select
