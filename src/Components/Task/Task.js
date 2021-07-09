import React from 'react';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

import {
  BsFillTrashFill,
} from 'react-icons/bs'

import {
  Container,
  SmallSec,
  LargeSec,
  TextBox,
  BigTextBox,
  IconWrapper,
} from './Task.elements'

const Task = ({ task, handleComplete, handleDelete, complete }) => {

  const handleColor = () => {
    if (complete) return '#efefefff';
    if (task.priority === "HIGH") return '#e06666ff';
    else if (task.priority === "MEDIUM") return '#ffd966ff';
    else if (task.priority === "LOW") return '#93c47dff';
  }

  return (
    <Container color={handleColor}>
      <SmallSec style={{ justifyContent: 'flex-start' }}>
        <TextBox>{task.dueTime}</TextBox>
      </SmallSec>

      <LargeSec>
        <BigTextBox>{task.name}</BigTextBox>
      </ LargeSec>

      <SmallSec >
        <IconWrapper onClick={() => handleDelete(task)}>
          <BsFillTrashFill size="1.2em"/>
        </IconWrapper>
        <IconWrapper onClick={() => handleComplete(task)}>
          {complete ? <RiCheckboxCircleFill size="1.5em" /> : <RiCheckboxBlankCircleLine size="1.5em" />}
        </IconWrapper>
      </SmallSec>
    </Container >
  )
}

export default Task