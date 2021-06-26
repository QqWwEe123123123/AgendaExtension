import React from 'react'
import { Task } from '../../Components'

const Tasks = ({ list }) => {
    list = sort_by_priority(list);
    return (
        list.map(task => {
            return (<Task name={task.name} dueDate={task.dueDate} priority={task.priority} />)
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
