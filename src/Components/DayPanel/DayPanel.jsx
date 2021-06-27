import { React, useEffect, useState } from 'react'

import { Tasks } from '../../Components'
import { AddTask } from '../../Components'

const DayPanel = ({ localItem }) => {

  const [toDos, setToDos] = useState([]);
  const [newTask, setNewTask] = useState({});

  useEffect(() => {
    const storedToDoList = JSON.parse(localStorage.getItem(localItem))

    if (storedToDoList) setToDos(storedToDoList);
    else setToDos([]);
  }, [localItem])

  useEffect(() => {
    localStorage.setItem(localItem, JSON.stringify(toDos));
  }, [toDos])

  useEffect(() => {
    const newDate = newTask.dueDate;
    console.log(newDate);
    const storedToDoList = JSON.parse(localStorage.getItem(newDate));
    let toDoList = [];

    if (storedToDoList) toDoList = toDoList;
    else toDoList = [];

    toDoList.push(newTask);
    localStorage.setItem(newDate, JSON.stringify(toDoList));

  }, [newTask])

  return (
    <div>
      <AddTask setNewTask={setNewTask} />
      {toDos !== null ? <Tasks toDos={toDos} setToDos={setToDos} /> : <></>}
    </div>
  )
}

export default DayPanel
