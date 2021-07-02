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
  Icon,
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
      <SmallSec>
        <TextBox>{task.dueTime}</TextBox>
      </SmallSec>

      <LargeSec>
        <BigTextBox>{task.name}</BigTextBox>
      </ LargeSec>

      <SmallSec >
        <Icon onClick={() => handleDelete(task)}>
          {<BsFillTrashFill size="1.6em" />}
        </Icon>
        <Icon onClick={() => handleComplete(task)}>
          {complete ? <RiCheckboxCircleFill size="2em" /> : <RiCheckboxBlankCircleLine size="2em" />}
        </Icon>
      </SmallSec>
    </Container>
  )
}

export default Task
