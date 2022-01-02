import React from "react";
import classes from "./ToDoList.module.scss";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import classNames from "classnames";
import { SVGiconsSelector } from "../../UI/SVGiconsSelector/SVGiconsSelector";
import Button from "../../UI/Button/Button";

const ToDoList = ({
  removeHandler, 
  checkToDoHandler, 
  filteredMyToDo,
  filteredActiveCompleted,
  isActive,
  sortedActiveCompleted,
  sortedAlphabetical,
  changeTheme
}) => {
  
  return (
    <div className={classNames(classes.ToDoList, 
      {[classes.LightTheme]: changeTheme === "light"})}
    >
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
              changeTheme={changeTheme}
            />
          );
        })}

        <li className={classes.ListItemButtonWrapper}>
          <Button onClick={() => sortedAlphabetical("ascending")}>
            <SVGiconsSelector id="sortAlphabeticalAscending" />
          </Button>
          <Button onClick={() => sortedAlphabetical("descending")}>
            <SVGiconsSelector id="sortAlphabeticalDescending" />
          </Button>

          <Button onClick={() => sortedActiveCompleted(false)}>
            <SVGiconsSelector id="sortActive" />
          </Button>
          <Button onClick={() => sortedActiveCompleted(true)}>
            <SVGiconsSelector id="sortCompleted" />
          </Button>

          <Button className={classNames(classes.Button, 
            {[classes.Active]: isActive === "all" && changeTheme === "dark"},
            {[classes.ActiveLightTheme]: isActive === "all" && changeTheme === "light"})} 
            onClick={() => filteredActiveCompleted("all")}
          >
            All
          </Button>
          <Button className={classNames(classes.Button, 
            {[classes.Active]: isActive === false && changeTheme === "dark"},
            {[classes.ActiveLightTheme]: isActive === false && changeTheme === "light"})} 
            onClick={() => filteredActiveCompleted(false)}
          >
            Active
          </Button>
          <Button className={classNames(classes.Button, 
            {[classes.Active]: isActive === true && changeTheme === "dark"},
            {[classes.ActiveLightTheme]: isActive === true && changeTheme === "light"})} 
            onClick={() => filteredActiveCompleted(true)}
          >
            Completed
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
