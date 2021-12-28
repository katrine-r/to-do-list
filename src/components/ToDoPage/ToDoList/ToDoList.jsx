import React from "react";
import classes from "./ToDoList.module.scss";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import classNames from "classnames";
import { SVGiconsSelector } from "../../UI/SVGiconsSelector/SVGiconsSelector";

const ToDoList = ({
  removeHandler, 
  checkToDoHandler, 
  filteredMyToDo,
  filteredActiveCompleted,
  isActive,
  sortedActiveCompleted,
  sortedAlphabetical
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
            <button className={classes.Button} onClick={() => sortedAlphabetical("ascending")}>
              <SVGiconsSelector id="sortAlphabeticalAscending" />
            </button>
            <button className={classes.Button} onClick={() => sortedAlphabetical("descending")}>
              <SVGiconsSelector id="sortAlphabeticalDescending" />
            </button>

            <button className={classes.Button} onClick={() => sortedActiveCompleted(false)}>
              <SVGiconsSelector id="sortActive" />
            </button>
            <button className={classes.Button} onClick={() => sortedActiveCompleted(true)}>
              <SVGiconsSelector id="sortCompleted" />
            </button>

            <button className={classNames(classes.Button, {[classes.Active]: isActive === "all"})} onClick={() => filteredActiveCompleted("all")}>
              All
            </button>
            <button className={classNames(classes.Button, {[classes.Active]: isActive === false})} onClick={() => filteredActiveCompleted(false)}>
              Active
            </button>
            <button className={classNames(classes.Button, {[classes.Active]: isActive === true})} onClick={() => filteredActiveCompleted(true)}>
              Completed
            </button>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
