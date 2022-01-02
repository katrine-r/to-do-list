import React from "react";
import classes from "./ToDoListItem.module.scss";
import { SVGiconsSelector } from "../../../UI/SVGiconsSelector/SVGiconsSelector";
import classNames from "classnames";
import Button from "../../../UI/Button/Button";

const ToDoListItem = ({
  textToDo, 
  id, 
  removeHandler, 
  checkToDoHandler, 
  checked, 
  changeTheme
}) => {

  return (
    <li className={classes.ToDoListItem}>
      <div className={classes.ItemWrapper}>
        <span className={classNames(classes.ItemIcon, 
          {[classes.Check]: checked && changeTheme === "dark"},
          {[classes.CheckLightTheme]: checked && changeTheme === "light"})}
          onClick={() => checkToDoHandler(id)}
        >
          {checked 
            ? <SVGiconsSelector id="checkBold" className={classes.CheckBoldIcon} /> 
            : <SVGiconsSelector id="checkboxBlankCircle" />
          }
        </span>

        <span className={classNames(
          {[classes.CheckText]: checked && changeTheme === "dark"}, 
          {[classes.ItemText]: changeTheme === "dark"}, 
          {[classes.CheckTextLightTheme]: checked && changeTheme === "light"},
          {[classes.LightTheme]: changeTheme === "light"})}
        >
          {textToDo}
        </span>
      </div>

      <div>
        <Button onClick={() => removeHandler(id)}>
          <SVGiconsSelector id="delete" />
        </Button>
      </div>
    </li>
  );
};

export default ToDoListItem;
