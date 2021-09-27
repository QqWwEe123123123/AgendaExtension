import { React, useEffect, useState } from "react";

import { Tasks } from "..";
import { AddTask } from "..";
import { AddNewTask } from "..";

import { TiPlus } from "react-icons/ti";

import {
  NewTaskContainer,
  NewTaskWrapper,
  NewTaskText,
} from "./DayPanel.elements";

const NewTaskButton = ({ setNewTaskPannel }) => {
  return (
    <NewTaskContainer>
      <NewTaskWrapper onClick={() => setNewTaskPannel(1)}>
        <TiPlus />
        <NewTaskText>Task</NewTaskText>
      </NewTaskWrapper>
    </NewTaskContainer>
  );
};

const DayPanel = ({ date }) => {
  const [toDos, setToDos] = useState([]);
  const [newTask, setNewTask] = useState({});
  const [categories, setCategories] = useState([]);
  const [newTaskPannel, setNewTaskPannel] = useState(0);

  // localStorage
  const SaveTask = (dueDate, toDoList) => {
    localStorage.setItem(dueDate, JSON.stringify(toDoList));
  };

  const LoadToDos = () => {
    if (localStorage.getItem(date) === null) {
      console.log("No Saved Data!");
      setToDos([]);
      return;
    }

    const storedToDos = JSON.parse(localStorage.getItem(date));
    if (storedToDos) setToDos(storedToDos);
    else setToDos([]);
    console.log("Loaded List");
  };

  const SaveNewTask = () => {
    const { name, dueDate, dueTime, priority } = newTask;
    const storedToDoList = JSON.parse(localStorage.getItem(dueDate));
    let toDoList = [];

    if (storedToDoList) toDoList = storedToDoList;

    toDoList.push(newTask);

    SaveTask(dueDate, toDoList);

    if (dueDate === date) setToDos(toDoList);
    console.log("Added New Task");
  };

  // Load toDos whenever date changes
  useEffect(() => {
    LoadToDos();
  }, [date]);

  // Load and save toDos when new tasks are added
  useEffect(() => {
    if (Object.entries(newTask).length !== 0) SaveNewTask();
  }, [newTask]);

  return (
    <>
      {toDos !== null ? (
        <Tasks toDos={toDos} setToDos={setToDos} SaveTask={SaveTask} />
      ) : (
        <></>
      )}
      {/* <AddTask setNewTask={setNewTask} /> */}
      <NewTaskButton setNewTaskPannel={setNewTaskPannel} />
      {newTaskPannel ? (
        <AddNewTask
          setNewTask={setNewTask}
          categories={categories}
          setCategories={setCategories}
          setNewTaskPannel={setNewTaskPannel}
        />
      ) : (
        <> </>
      )}
    </>
  );
};

export default DayPanel;
