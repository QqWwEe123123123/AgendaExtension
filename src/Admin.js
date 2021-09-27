import React, { useState, useEffect } from "react";

import DayView from "./Views/DayView/DayView";
import moment from "moment";

const Admin = () => {
  // Used to flip between different pages/views
  /* Current Pages include
    Main Page
    New Task Page
  */
  const [currentView, setCurrentView] = useState("Main Page");
  //========================================
  // New Task
  //========================================
  const [toDos, setToDos] = useState([]);
  const [newTask, setNewTask] = useState({});
  const [categories, setCategories] = useState([]);

  //========================================
  // Dates
  //========================================
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [dayCount, setDayCount] = useState(0);

  useEffect(() => {
    setDay(moment().format("dddd"));
    setDate(moment().format("LL"));
  }, []);

  useEffect(() => {
    setDay(moment().add(dayCount, "days").format("dddd"));
    setDate(moment().add(dayCount, "days").format("LL"));
  }, [dayCount]);

  const CycleBack = () => setDayCount(dayCount - 1);

  const CycleForward = () => setDayCount(dayCount + 1);

  //========================================
  // localStorage
  //========================================

  // Save task to storage
  const SaveTask = (dueDate, toDoList) => {
    localStorage.setItem(dueDate, JSON.stringify(toDoList));
  };

  // Load task from storage
  const LoadToDos = () => {
    // Check to see if tasks exist
    if (localStorage.getItem(date) === null) {
      console.log("No Saved Data!");
      setToDos([]);
      return;
    }

    // Load Task
    const storedToDos = JSON.parse(localStorage.getItem(date));
    if (storedToDos) setToDos(storedToDos);
    else setToDos([]);
    console.log("Loaded To Dos");
  };

  // Save task when a new task is created
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
  // useEffect(() => {
  //   if (Object.entries(newTask).length !== 0) SaveNewTask();
  // }, [newTask]);

  return (
    <>
      <DayView
        day={day}
        date={date}
        toDos={toDos}
        setToDos={setToDos}
        SaveTask={SaveTask}
        CycleBack={CycleBack}
        CycleForward={CycleForward}
      />
    </>
  );
};

export default Admin;
