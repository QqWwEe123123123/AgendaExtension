import React from 'react'
import { Task } from '../../Components'

const Tasks = ({ toDos,setToDos }) => {

    const handleComplete = (task) => {
        toDos.forEach(t => {
            if (t === task) {
                t.complete = !t.complete;
            }
        })
        setToDos([...toDos])
    }

    toDos = sort_by_priority(toDos);
    return (
        toDos.map(task => {
            return (<Task task={task} handleComplete={handleComplete} complete={task.complete} />)
        })
    )
}

function sort_by_priority(list) {
    let sortedList = [];
    let tempList = [];

    list.forEach(task => {
        if (task.priority === "HIGH") sortedList.unshift(task);
        else if (task.priority === "MEDIUM") sortedList.push(task);
        else if (task.priority === "LOW") tempList.push(task);
    })
    sortedList.push(...tempList);

    return sortedList;
}

export default Tasks
