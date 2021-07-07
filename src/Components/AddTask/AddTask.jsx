import React, { useRef, useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring';
import {
  TextBox,
  TextContainer,
  Container,
  Icon,
  Button,
  Background,
  PopUpContent,
  PopUpTextBox,
  PopUpTextWrapper,
  Caption,
} from './AddTask.elements'
import { FaPlus } from 'react-icons/fa'
import { BsFillCalendarFill, BsListNested } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import Aos from 'aos'
import 'aos/dist/aos.css/'

let dateFormat = require('dateformat');
let now = new Date();

const AddDueDate = ({ task, setTask, setPopUp, popUp }) => {
  const popUpRef = useRef();

  const closePopUp = e => {
    if (popUpRef.current === e.target) {
      setPopUp(0);
    }
  };

  useEffect(() => {
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true });
  }, [popUp])

  return (
    <>
      {popUp === 1 ? <Background onClick={closePopUp} ref={popUpRef}>
        <PopUpContent data-aos='fade-down'>
          <PopUpTextWrapper>
            <PopUpTextBox
              type="date"
              placeholder="YYYY-MM-DD"
              onChange={(event) => { setTask(prev => ({ ...prev, dueDate: event.target.value })) }}
              value={task.dueDate}
            />
          </PopUpTextWrapper>
          <PopUpTextWrapper>
            <PopUpTextBox
              type="time"
              placeholder="HH:MM:SS"
              onChange={(event) => { setTask(prev => ({ ...prev, dueTime: event.target.value })) }}
              value={task.dueTime}
            />
          </PopUpTextWrapper>
          <PopUpTextWrapper>
            <Icon>
              <ImCross onClick={() => setPopUp(0)} size='1em' />
            </Icon>
          </PopUpTextWrapper>
        </PopUpContent>
      </Background> : null}
    </>
  );
}

const AddPriority = ({ setTask, popUp, setPopUp }) => {
  const popUpRef = useRef();

  useEffect(() => {
    //Animate on Scroll
    Aos.init({ duration: 1000, once: true });
  }, [popUp])

  const closePopUp = e => {
    if (popUpRef.current === e.target) {
      setPopUp(0);
    }
  };

  const handleClose = (priority) => {
    setPopUp(0);
    setTask(prev => ({ ...prev, priority: priority }));
  }

  return (
    <>
      {popUp === 2 ? <Background onClick={closePopUp} ref={popUpRef}>
        <PopUpContent data-aos='fade-down' style={{ height: '15em' }}>
          <Button type="submit" value="HIGH" onClick={() => handleClose("HIGH")} color={'#cc0000ff'} HLcolor={'#cc0000c0'} />
          <Button type="submit" value="MEDIUM" onClick={() => handleClose("MEDIUM")} color={'#f1c232ff'} HLcolor={'#f1c232c0'} />
          <Button type="submit" value="LOW" onClick={() => handleClose("LOW")} color={'#6aa84fff'} HLcolor={'#6aa84fc0'} />
        </PopUpContent>
      </Background > : null}
    </>
  );
}

const AddTask = ({ setNewTask }) => {

  const [popUp, setPopUp] = useState(0);
  const [showCaption, setShowCaption] = useState(0);

  const [task, setTask] = useState(
    {
      name: '',
      dueDate: dateFormat(now, "isoDate"),
      dueTime: dateFormat(now, "isoTime"),
      priority: "LOW",
      complete: 0,
    }
  );

  const FormatDate = (date) => date.replace(/-/g, '\/')

  const HandleNewTask = () => {
    let obj = {
      name: task.name,
      dueDate: dateFormat(FormatDate(task.dueDate), "longDate"),
      dueTime: task.dueTime,
      priority: task.priority
    };
    setNewTask(obj);
    // Reset
    setTask(prev => (
      {
        ...prev,
        name: '',
        dueDate: dateFormat(now, "isoDate"),
        dueTime: dateFormat(now, "isoTime"),
        priority: "LOW",
        complete: 0
      }));
  }

  const HandleInput = event => {
    const { value, maxLength } = event.target;
    const message = value.slice(0, maxLength);

    setTask(prev => (
      {
        ...prev,
        name: event.target.value
      }
    ))
  }

  return (
    <>
      <Container>
        <TextContainer>
          <Icon onClick={HandleNewTask}>
            <FaPlus size="1.5em" />
          </Icon>
          <TextBox
            type="text"
            value={task.name}
            placeholder="Add a Task"
            onChange={HandleInput}
            maxLength="14"
          />

          <Icon
            onClick={() => setPopUp(popUp !== 0 ? 0 : 2)}
            onMouseEnter={() => setShowCaption(2)}
            onMouseLeave={() => setShowCaption(0)} >
            <BsListNested size="2em" />
          </Icon>
          {showCaption === 2 ? <Caption>
            Priority
          </Caption> : null}
          <Icon
            onClick={() => setPopUp(popUp !== 0 ? 0 : 1)}
            onMouseEnter={() => setShowCaption(1)}
            onMouseLeave={() => setShowCaption(0)}>
            <BsFillCalendarFill size="1.5em" />
          </Icon>
          {showCaption === 1 ? <Caption>
            Due Date
          </Caption> : null}
        </TextContainer>
      </Container>

      <AddDueDate task={task} setTask={setTask} popUp={popUp} setPopUp={setPopUp} ></AddDueDate>
      <AddPriority setTask={setTask} popUp={popUp} setPopUp={setPopUp} />
    </>
  )
}

export default AddTask