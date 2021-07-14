import React from 'react';
import { useState } from "react";
import Tasks from './Tasks';
import Task from './Task';

function EditTask({ task, onHandleSubmit }) {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");


   const handleChangeInput = (e) => {
     e.preventDefault();
     setDesc(e.target.value);
     setDate(e.target.value);
   };

  const handleSubmit = (task) => {
    task.preventDefault();
     if(task) {
          onHandleSubmit({ desc, date });

           setDesc("");
           setDate("");
    };



  }
    // const handleSubmit = event => {
    //     if (task) {
    //       setTask(task.concat({ desc: event.target.value, date: event.target.value }));
    //     }
    //     setDesc('');
    //     setDate('');

    //     event.preventDefault();
    //   };


    


//   const saveTask = (e) => {
//     e.preventDefault();
//     onSaveTask({ desc: desc, date: date });

//     setDesc("");
//     setDate("");
  
  return (
    <div className="card">
      <h3>Edit Task</h3>
      <form>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="desc"
          id={task.length}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          key={task.id}
        />

        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id={task.length}
          value={date}
          onChange ={(e) => setDate(e.target.value)}
          key={task.id}
        />

        <div className="text-right">
          <button className="button dark" key={task.id} onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;

