import React from "react";
import classes from "./ToDoList.module.scss";
import ToDoListItem from "./ToDoListItem/ToDoListItem";

const ToDoList = ({
  removeHandler, 
  checkToDoHandler, 
  filteredMyToDo,
  filteredActiveCompleted
}) => {
  
  return (
    <div className={classes.ToDoList}>
      <ul>
        {filteredMyToDo.map((textItem, index) => {
          return (
            <ToDoListItem
              key={index}
              id={textItem.id}
              textToDo={textItem.textToDo}
              removeHandler={removeHandler}
              checkToDoHandler={checkToDoHandler}
              checked={textItem.checked}
            />
          );
        })}

        <li className={classes.ListItemButtonWrapper}>
          <div>
            <button className={classes.Button} onClick={() => filteredActiveCompleted('all')}>
              All
            </button>
            <button className={classes.Button} onClick={() => filteredActiveCompleted(false)}>
              Active
            </button>
            <button className={classes.Button} onClick={() => filteredActiveCompleted(true)}>
              Completed
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
