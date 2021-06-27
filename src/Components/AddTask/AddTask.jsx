import { React, useState } from 'react'
import { TextBox, Container, Icon, DueDateContainer, PopupContainer, TextContainer, Button } from './AddTask.elements'
import { FaPlus } from 'react-icons/fa'
import { BsFillCalendarFill, BsListNested } from 'react-icons/bs'
import moment from 'moment'

let dateFormat = require('dateformat');

const AddDueDate = ({ task, setTask, setPopUp }) => {
  return (
    <PopupContainer>
      <DueDateContainer>
        <TextContainer>
          <TextBox
            type="date"
            placeholder="YYYY-MM-DD"
            onChange={(event) => { setTask(prev => ({ ...prev, dueDate: event.target.value })) }}
            value={task.dueDate === undefined ? moment().format('L') : task.dueDate}
          />
        </TextContainer>
        <TextContainer>
          <TextBox
            type="time"
            placeholder="HH:MM:SS"
            onChange={(event) => { setTask(prev => ({ ...prev, dueTime: event.target.value })) }}
            value={task.dueTime === undefined ? moment().format('LTS').split(" ")[0] : task.dueTime}
          />
        </TextContainer>
        <Button type="submit" value="Done" onClick={() => setPopUp(0)} />
      </DueDateContainer>
    </PopupContainer>
  );
}

const AddPriority = ({ setTask, setPopUp }) => {
  return (
    <PopupContainer>
      <DueDateContainer>
        <Button type="submit" value="HIGH" onClick={() => {setPopUp(0); setTask(prev => ({ ...prev, priority: "HIGH" })); }} />
        <Button type="submit" value="MEDIUM" onClick={() => {setPopUp(0); setTask(prev => ({ ...prev, priority: "MEDIUM" })); }} />
        <Button type="submit" value="LOW" onClick={() => {setPopUp(0); setTask(prev => ({ ...prev, priority: "LOW" })); }} />
      </DueDateContainer>
    </PopupContainer>
  );
}

const AddTask = ({ setNewTask }) => {

  const [popUp, setPopUp] = useState(0);

  const [task, setTask] = useState({ name: '', dueDate: "2021-06-26", dueTime: "12:32:43", priority: "LOW", complete: 0 });


  const handleNewTask = () => {
    let obj = {
      "name": task.name,
      "dueDate": dateFormat(task.dueDate, "mmmm dd, yyyy"),
      "dueTime": task.dueTime,
      "priority": task.priority

    };
    setNewTask(obj);
    setTask(prev => ({ ...prev, name: '', dueDate: "2021-06-26", dueTime: "12:32:43", priority: "LOW", complete: 0 }));
  }

  return (
    <Container>
      <Icon onClick={handleNewTask}>
        <FaPlus size="2em"/>
      </Icon>
      <TextBox
        type="text"
        value={task.name}
        placeholder="Add a Task"
        onChange={(event) => { setTask(prev => ({ ...prev, name: event.target.value })) }}
      />

      <Icon onClick={() => setPopUp(popUp !== 0 ? 0 : 2)} >
        <BsListNested size="2.5em"/>
      </Icon>
      <Icon onClick={() => setPopUp(popUp !== 0 ? 0 : 1)}>
        <BsFillCalendarFill size="2em"/>
      </Icon>

      {popUp === 1 ? <AddDueDate task={task} setTask={setTask} setPopUp={setPopUp} /> : <></>}

      {popUp === 2 ? <AddPriority setTask={setTask} setPopUp={setPopUp} /> : <></>}

    </Container>
  )
}

export default AddTask
