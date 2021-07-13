import React from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import {
  Container,
  Titles,
  DateText,
  Bigsec,
  Smallsec,
  DateContainer,
  Icon
} from './Datetime.elements'

const Datetime = ({ day, date, handleBack, handleFront }) => {
  return (
    <Container>
      <Icon >
        <MdKeyboardArrowLeft onClick={handleBack} size="2em" color="#64c3f9"/>
      </Icon>
      <DateContainer>
        <Bigsec>
          <Titles>{day}</Titles>
        </Bigsec>
        <Smallsec>
          <DateText>{date}</DateText>
        </Smallsec>
      </DateContainer>
      <Icon >
        <MdKeyboardArrowRight onClick={handleFront} size="2em" color="#64c3f9"/>
      </Icon>
    </Container >
  )
}

export default Datetime