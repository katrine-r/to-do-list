import React from "react";
import classes from "./ToDoListItem.module.scss";
import { SVGiconsSelector } from "../../../UI/SVGiconsSelector/SVGiconsSelector";
import classNames from "classnames";

const ToDoListItem = ({textToDo, id, removeHandler, checkToDoHandler, checked}) => {
  return (
    <li className={classes.ToDoListItem}>
      <div className={classes.ItemWrapper}>
        {/* <span className={classes.ItemIcon}> */}
        <span 
          className={classNames(classes.ItemIcon, {[classes.Check]: checked})}
          onClick={() => checkToDoHandler(id)}
        >

          <SVGiconsSelector id="checkboxBlankCircle" />
        </span>
        <span className={classNames(classes.ItemText, {[classes.CheckText]: checked})}>{textToDo}</span>
      </div>

      <div>
        <button className={classes.Button} onClick={() => removeHandler(id)}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default ToDoListItem;
