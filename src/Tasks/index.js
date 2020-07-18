import React from "react";
import "./style.css"

const Tasks = (props) => (
  <ul className="tasksList">
    {props.tasks.map(task => (
      <li
        key={task.id}
        className={`tasksList__item ${task.done && props.hideDoneTasks ? "tasksList__item--hidden" : ""}`}>
        <button className={`tasksList__button ${task.done ? "tasksList__button--checked" : ""}`}></button>
        <span className={`tasksList__content ${task.done ? "tasksList__content--done" : ""}`} > {task.content}</span>
        <button className={`tasksList__button tasksList__button--remove`}></button>
      </li>))}
  </ul>
)

export default Tasks;