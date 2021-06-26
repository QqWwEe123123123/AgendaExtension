import React from 'react'
import alarmClock from '../../images/alarm-clock.png'

import { Container,SmallSec,LargeSec,Img,TextBox } from './Task.elements'

const Task = ({name, dueDate, dateCreated, priority}) => {
  return (
    <Container>
      <SmallSec>
        <Img src={alarmClock}/>
        <TextBox>{dueDate}</TextBox>
      </SmallSec>
      <LargeSec>
        <TextBox>{name}</TextBox>
      </ LargeSec>
      <SmallSec />
    </Container>
  )
}

export default Task
