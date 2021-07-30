import React, { useLayoutEffect } from 'react';
import './App.css';
import { useState } from 'react';
import Tasks from 'react';
import Task from 'react';


function DeleteTask(task, handleDelete, id, tasks) {
// const [desc, setDesc] = useState("");
    const id = task.id;
    const handleDelete = (tasks, id) => {
       const index = tasks.findIndex((t) => {
        if(id == t.id && index > -1)
        {   
        const nTasks = [...tasks];
        nTasks.splice(index, 1);
        setTask(nTasks);
       };
    }

    return (
        <div className="card text-center">
        <button className="button-red" onClick={() => handleDelete(task)}> Delete Task</button>
        </div>
        );

    };

export default DeleteTask;