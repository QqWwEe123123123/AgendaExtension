import React from 'react'
import { Task } from '..'
import {Container} from './Tasks.elements'

const Tasks = ({ toDos, setToDos, SaveTask }) => {

    const handleComplete = (task) => {
        toDos.forEach(t => {
            if (t === task) {
                t.complete = !t.complete;
            }
        })
        setToDos([...toDos]);
        SaveTask(task.dueDate,toDos);
    }

    const handleDelete = (task) => {
        const taskIDX = toDos.indexOf(task);
        toDos.splice(taskIDX, 1);

        setToDos([...toDos]);
        SaveTask(task.dueDate,toDos);
    }

    toDos = SortByPriority(toDos);
    return (
        <Container>
            {toDos.map(task => {
                return (<Task task={task} handleComplete={handleComplete} handleDelete={handleDelete} complete={task.complete} />)
            })}
        </Container>
    )
}

function SortByPriority(list) {
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
