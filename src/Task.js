import React from 'react';
import EditTask from './EditTask';
import {useState} from 'react';

function Task({ task, index, onTglStatus, showTaskEdit, setShowTaskEdit, onHandleChangeInput, onHandleSubmit, onShowTaskEdit}) {

  
  return (
    <div className="card text-left" >
      <button className="button" key={task.id} onClick={() => onShowTaskEdit(task)}>Edit Task </button>
      {task.done && <EditTask index = {index} onHandleSubmit={onHandleSubmit} task={{}}/>}

 {/* onHandleSubmit={onHandleSubmit} */}

      <div className="row">
        <div className="col-10">
          <h4>{task.desc}</h4>
          <div className="task-meta">
            <img
              src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
              alt="calendar"
            />
            {task.date}
            
          </div>
        </div>

        <div className="col-2 is-center">
          {/* <button className="button icon-only clear">
            <img
              src="https://icongr.am/feather/check-circle.svg?size=24&color=11d054"
              alt="Open"
            />
          </button> */}
  <button className="button icon-only clear" onClick={() => onTglStatus(task)}>
  {task.complete && "✅"}
  {!task.complete && "⬜"}
</button>
        </div>
        <div className="col-12">
          <p>{task.remarks}</p>
        </div>
      </div>
    </div>
  );
  }
  export default Task;
  