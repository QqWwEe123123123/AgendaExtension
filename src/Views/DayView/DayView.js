import React from "react";

import DataTime from "./DayViewComponents/Datetime/Datetime";
import Tasks from "./DayViewComponents/Tasks/Tasks";
import NewTaskButton from "./DayViewComponents/NewTaskButton/NewTaskButton";

const DayView = ({
  day,
  date,
  toDos,
  setToDos,
  SaveTask,
  CycleBack,
  CycleForward,
}) => {
  return (
    <>
      <DataTime
        day={day}
        date={date}
        CycleBack={CycleBack}
        CycleForward={CycleForward}
      />
      <Tasks toDos={toDos} setToDos={setToDos} SaveTask={SaveTask} />

      <NewTaskButton />
    </>
  );
};

export default DayView;
