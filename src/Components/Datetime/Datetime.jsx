import React from 'react'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'

import { Container, Titles, DateText, Bigsec, Smallsec, DateContainer,Icon } from './Datetime.elements'

const Datetime = ({ day, date }) => {
  return (
    <Container>
      <Icon><MdKeyboardArrowRight /></Icon>
      <DateContainer>
        <Bigsec>
          <Titles>{day}</Titles>
        </Bigsec>
        <Smallsec>
          <DateText>{date}</DateText>
        </Smallsec>
      </DateContainer>
      <Icon><MdKeyboardArrowLeft /></Icon>
    </Container >
  )
}

export default Datetime