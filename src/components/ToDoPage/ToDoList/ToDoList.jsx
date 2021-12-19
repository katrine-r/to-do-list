import React from "react";
import classes from "./ToDoList.module.scss";
import ToDoListItem from "./ToDoListItem/ToDoListItem";

const ToDoList = (props) => {
  return (
    <div className={classes.ToDoList}>
      <ul>
        {props.myToDo.map((textItem, index) => {
          return (
            <ToDoListItem
              key={index}
              id={textItem.id}
              text={textItem.textToDo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
