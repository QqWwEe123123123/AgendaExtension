import React, { useState } from 'react'
import Select from "react-dropdown-select";

import {
  NewTaskWrapper,
  NewTaskContainer,
  NewTaskText,
  Panel,
  TitleWrapper,
  Title,
  SubTitleWrapper,
  SubTitle,
  InputText,
  InputContainer,
  InputColContainer,
  InputWrapper,
  InputTitleWrapper,
  InputDateTime,
  InputButtonContainer,
  InputButtonWrapper,
} from './AddNewTask.elements'

import { TiPlus } from 'react-icons/ti';
import { IoIosArrowForward } from 'react-icons/io';

let dateFormat = require('dateformat');
let now = new Date();

const NewTaskButton = ({ setNewTaskPannel }) => {
  return (
    <NewTaskContainer>
      <NewTaskWrapper onClick={() => setNewTaskPannel(1)}>
        <TiPlus />
        <NewTaskText>Task</NewTaskText>
      </NewTaskWrapper>
    </NewTaskContainer>
  )
}

const AddNewTaskButton = ({ HandleNewTask }) => {
  return (
    <NewTaskContainer style={{ justifyContent: 'center' }}>
      <NewTaskWrapper
        onClick={() => HandleNewTask()}
        style={{
          width: '30%',
          borderRadius: '5px',
          padding: '15px 0px',
          marginTop: '5px'
        }}>
        <NewTaskText>Create Task</NewTaskText>
        <IoIosArrowForward />
      </NewTaskWrapper>
    </NewTaskContainer>
  )
}

const AddTaskPanel = ({ task, setTask, categories, setCategories, HandleNewTask }) => {

  const dateTimeStyle = {
    position: 'relative',
    top: '10px',
    padding: '5px'
  }

  const PriorityButton = ({ name, id, Bcolor, color }) => {
    return (
      <InputButtonWrapper
        Bcolor={Bcolor}
        color={color}
        onClick={() => setTask(prev => ({ ...prev, priority: id }))}
      >
        {name}
      </InputButtonWrapper>
    )
  }

  return (
    <Panel>
      <TitleWrapper>
        <Title>Create New Task</Title>
      </TitleWrapper>

      <SubTitleWrapper>
        <SubTitle>Schedule</SubTitle>
      </SubTitleWrapper>

      <InputContainer>
        <InputTitleWrapper>Task</InputTitleWrapper>
        <InputWrapper>
          <InputText
            type="text"
            placeholder="Add A Task"
            onChange={(event) => { setTask(prev => ({ ...prev, name: event.target.value })) }}
          />
        </InputWrapper>
      </InputContainer>

      <InputContainer>
        <InputTitleWrapper>Category</InputTitleWrapper>
        <InputWrapper
          style={{
            display: 'inline-block',
          }}>
          <Select
            style={{
              outline: "none",
              border: "none",
              boxShadow: "none",
              width: "100%",
              padding: "0 20px",
              fontSize: "12px",
            }}
            Searchable={true}
            create={true}
            options={categories}
            placeholder="Select A Category"
            createNewLabel={"Create {search}"}
            closeOnScroll={true}
            onCreateNew={(values) => {
              setCategories(prev => ([...prev, values]))
            }}
            onChange={(value) => setTask(prev => ({ ...prev, category: value[0].value })) }
            
          />
        </InputWrapper>
      </InputContainer>

      <InputContainer>
        <InputColContainer>
          <InputTitleWrapper>Due Date</InputTitleWrapper>
          <InputWrapper style={dateTimeStyle}>
            <InputDateTime
              type="date"
              placeholder="YYYY-MM-DD"
              onChange={(event) => setTask(prev => ({ ...prev, dueDate: event.target.value })) }
              value={task.dueDate}
            />
          </InputWrapper>
        </InputColContainer>

        <InputColContainer>
          <InputTitleWrapper>End Time</InputTitleWrapper>
          <InputWrapper style={dateTimeStyle}>
            <InputDateTime
              type="time"
              placeholder="HH:MM"
              onChange={(event) => { setTask(prev => ({ ...prev, dueTime: event.target.value })) }}
              value={task.dueTime}
            />
          </InputWrapper>
        </InputColContainer>
      </InputContainer>

      <SubTitleWrapper>
        <SubTitle>Priority</SubTitle>
      </SubTitleWrapper>

      <InputButtonContainer>
        <PriorityButton
          name="High"
          Bcolor="#fe8687a9"
          color="#990000"
          id="HIGH" />

        <PriorityButton
          name="Medium"
          Bcolor="#f2bf89a8"
          color="#b45f06"
          id="MEDIUM" />

        <PriorityButton
          name="Low"
          Bcolor="#64c3f9a8"
          color="#0b5394"
          id="LOW" />
      </InputButtonContainer>

      <AddNewTaskButton HandleNewTask={HandleNewTask} />
    </Panel >
  )
}

const AddNewTask = ({ setNewTask, categories, setCategories }) => {

  const [newTaskPannel, setNewTaskPannel] = useState(1);
  const [task, setTask] = useState(
    {
      name: '',
      dueDate: dateFormat(now, "isoDate"),
      dueTime: dateFormat(now, "isoTime"),
      priority: "LOW",
      category: "",
      complete: 0,
    }
  );

  const FormatDate = (date) => date.replace(/-/g, '\/');

  const FormatTime = (dueTime) => {
    // format time to a 12 hour time
    let HH = dueTime.substr(0, 2);
    let MM = dueTime.substr(3, 2);
    let meridiem = "AM";

    if (HH >= 12) {
      meridiem = "PM";
      HH = HH % 12;
    }

    const time = HH + ':' + MM + ' ' + meridiem;
    return time;
  }

  const HandleInput = (task, setTask) => {
    if (task.name.length === 0) {
      alert("Please enter a task name!")
      return false;
    }
    if (task.category === "") {
      alert("Please select a category!")
      return false;
    }
    return true;
  }

  const HandleNewTask = () => {
    if (!HandleInput(task, setTask)) {
      return;
    }
    console.log(task.dueTime);
    let obj = {
      name: task.name,
      dueDate: dateFormat(FormatDate(task.dueDate), "longDate"),
      dueTime: FormatTime(task.dueTime),
      priority: task.priority,
      category: task.category,
      complete: 0
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
        category: "",
        complete: 0
      }));

    setNewTaskPannel(0);
  }

  return (
    <>
      <NewTaskButton setNewTaskPannel={setNewTaskPannel} />
      {newTaskPannel ?
        <AddTaskPanel
          task={task}
          setTask={setTask}
          HandleNewTask={HandleNewTask}
          categories={categories}
          setCategories={setCategories}
        /> : <> </>}
    </>
  )
}

export default AddNewTask
