import { React, useEffect, useState } from 'react'

import { Tasks } from '../../Components'
import { AddTask } from '../../Components'

const DayPanel = ({localItem}) => {

  const [toDos, setToDos] = useState([]);
  const [newTask, setNewTask] = useState({});

  useEffect(() => {
    const storedToDoList = JSON.parse(localStorage.getItem(localItem))

    if (storedToDoList) setToDos(storedToDoList)
  }, [])

  useEffect(() => {
    localStorage.setItem(localItem, JSON.stringify(toDos));
  }, [toDos])

  useEffect(() => {
    if (newTask !== {}) setToDos(prev => ([ ...prev, newTask ]))
  }, [newTask])

  return (
    <div>
      <AddTask setNewTask={setNewTask} />
      <Tasks toDos={toDos} setToDos={setToDos}/>
    </div>
  )
}

export default DayPanel
