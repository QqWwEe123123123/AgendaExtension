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
  HighLight,
  LargeSec,
  SmallTextWrapper,
  BigTextWrapper,
  IconWrapper,
} from './Task.elements'

const Task = ({ task, handleComplete, handleDelete, complete }) => {

  const HandleColor = () => {
    if (complete) return '#efefefff';
    if (task.priority === "HIGH") return '#fe8687ff';
    else if (task.priority === "MEDIUM") return '#f2bf89ff';
    else if (task.priority === "LOW") return '#64c3f9ff';
  }

  return (
    <Container>
      <HighLight color={HandleColor}/>
      <IconWrapper onClick={() => handleComplete(task)}>
        {complete ? <RiCheckboxCircleFill size="2em" /> : <RiCheckboxBlankCircleLine size="2em" />}
      </IconWrapper>
      <LargeSec>
        <BigTextWrapper>{task.name}</BigTextWrapper>
        <SmallTextWrapper>{task.dueTime}</SmallTextWrapper>
      </LargeSec>
      <IconWrapper onClick={() => handleDelete(task)}>
          {<BsFillTrashFill size="1.6em" />}
      </IconWrapper>

    </Container>
  )
}

export default Task