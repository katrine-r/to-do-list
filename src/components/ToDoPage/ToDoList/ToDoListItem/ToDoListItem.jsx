import React from "react";
import classes from "./ToDoListItem.module.scss";
import { SVGiconsSelector } from "../../../UI/SVGiconsSelector/SVGiconsSelector";

const ToDoListItem = ({textToDo, id, removeHandler}) => {
  return (
    <li className={classes.ToDoListItem}>
      <div className={classes.ItemWrapper}>
        <span className={classes.ItemIcon}>
          <SVGiconsSelector id="checkboxBlankCircle" />
        </span>
        <span className={classes.ItemText}>{textToDo}</span>
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
