import React from 'react'

import { Container,Titles, DateText,Bigsec, Smallsec } from './Datetime.elements'

const Datetime = ({day, date}) => {
  return (
    <Container>
      <Bigsec>
        <Titles>
            {day}
        </Titles>
      </Bigsec>
      <Smallsec>
        <DateText>
          {date}
        </DateText>
      </Smallsec>
    </Container>
  )
}

export default Datetime