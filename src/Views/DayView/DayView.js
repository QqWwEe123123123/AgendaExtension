import React from "react";

import DataTime from "./DayViewComponents/Datetime/Datetime";
import Tasks from "../DayViewComponents/Task/Task";

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
    <div>
      <DataTime
        day={day}
        date={date}
        CycleBack={CycleBack}
        CycleForward={CycleForward}
      />
      {/* {toDos !== null ? (
        <Tasks toDos={toDos} setToDos={setToDos} SaveTask={SaveTask} />
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default DayView;
