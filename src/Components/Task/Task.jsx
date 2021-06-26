import { React, useState } from 'react';
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

const Task = ({ name, dueDate, priority }) => {

  const [done, setDone] = useState(0);

  const handleColor = () => {
    if (done) return '#efefefff';
    if (priority === "HIGH") return '#e06666ff';
    else if (priority === "MEDIUM") return '#ffd966ff';
    else if (priority === "LOW") return '#93c47dff';
  }

  const handleOnClick = () => setDone(!done);

  return (
    <Container color={handleColor()}>
      <SmallSec>
        <TextBox>{dueDate}</TextBox>
      </SmallSec>

      <LargeSec>
        <BigTextBox>{name}</BigTextBox>
      </ LargeSec>

      <SmallSec >
        <Img src={alarmClock} />
        <Icon onClick={handleOnClick}>
          {done ? <RiCheckboxCircleFill size="2em" /> : <RiCheckboxBlankCircleLine size="2em" />}
        </Icon>
      </SmallSec>
    </Container>
  )
}

export default Task
