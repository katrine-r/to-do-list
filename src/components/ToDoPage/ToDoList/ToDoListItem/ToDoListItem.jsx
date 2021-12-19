import React from "react";
import classes from "./ToDoListItem.module.scss";
import { SVGiconsSelector } from "../../../UI/SVGiconsSelector/SVGiconsSelector";

const ToDoListItem = (props) => {
  return (
    <li className={classes.ToDoListItem}>
      <span className={classes.ItemIcon}>
        <SVGiconsSelector id="checkboxBlankCircle" />
      </span>
      <span className={classes.ItemText}>{props.text}</span>
    </li>
  );
};

export default ToDoListItem;
