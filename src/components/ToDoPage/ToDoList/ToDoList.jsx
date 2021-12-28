import React from "react";
import classes from "./ToDoList.module.scss";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import classNames from "classnames";

const ToDoList = ({
  removeHandler, 
  checkToDoHandler, 
  filteredMyToDo,
  filteredActiveCompleted,
  isActive
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
            <button className={classNames(classes.Button, {[classes.Active]: isActive === 'all'})} onClick={() => filteredActiveCompleted('all')}>
              All
            </button>
            <button className={classNames(classes.Button, {[classes.Active]: isActive === false})} onClick={() => filteredActiveCompleted(false)}>
              Active
            </button>
            <button className={classNames(classes.Button, {[classes.Active]: isActive === true})} onClick={() => filteredActiveCompleted(true)}>
              Completed
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
