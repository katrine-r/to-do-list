import React from "react";
import classes from "./ToDoList.module.scss";
import ToDoListItem from "./ToDoListItem/ToDoListItem";

const ToDoList = ({myToDo, removeHandler}) => {
  return (
    <div className={classes.ToDoList}>
      <ul>
        {myToDo.map((textItem, index) => {
          return (
            <ToDoListItem
              key={index}
              id={textItem.id}
              textToDo={textItem.textToDo}
              removeHandler={removeHandler}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
