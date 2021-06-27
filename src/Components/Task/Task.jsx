import React from 'react';
import alarmClock from '../../images/alarm-clock.png';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill
} from 'react-icons/ri';

import {
  Container,
  SmallSec,
  LargeSec, 
  Img, 
  TextBox, 
  BigTextBox, 
  Icon,
} from './Task.elements'

const Task = ({ task, handleComplete,complete }) => {

  const handleColor = () => {
    if (complete) return '#efefefff';
    if (task.priority === "HIGH") return '#e06666ff';
    else if (task.priority === "MEDIUM") return '#ffd966ff';
    else if (task.priority === "LOW") return '#93c47dff';
  }

  return (
    <Container color={handleColor()}>
      <SmallSec>
        <TextBox>{task.dueTime}</TextBox>
      </SmallSec>

      <LargeSec>
        <BigTextBox>{task.name}</BigTextBox>
      </ LargeSec>

      <SmallSec >
        <Img src={alarmClock} />
        <Icon onClick={() => handleComplete(task)}>
          {complete ? <RiCheckboxCircleFill size="2em" /> : <RiCheckboxBlankCircleLine size="2em" />}
        </Icon>
      </SmallSec>
    </Container>
  )
}

export default Task
