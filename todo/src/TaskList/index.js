import React from "react";
import TaskCard  from "../TaskCard";

import "./index.css";


export default function TaskList(props){

    return (
        <section className="container">
        <ul className="task-list">
          {
            props.list.map((task, index) => (
              <TaskCard index={index} task={task} />
            ))
          }
        </ul>
      </section>
    );
}