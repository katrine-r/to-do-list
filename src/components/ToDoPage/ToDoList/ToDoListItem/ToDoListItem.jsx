import React from "react";
import classes from "./ToDoListItem.module.scss";
import { SVGiconsSelector } from "../../../UI/SVGiconsSelector/SVGiconsSelector";
import classNames from "classnames";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";

const ToDoListItem = ({
  textToDo, 
  id, 
  removeHandler, 
  checkToDoHandler, 
  checked, 
  changeTheme,
  viewOrEditToDoHandler,
  edit,
  editingToDoHandler,
  finishedEditingKeyEnterHandler
}) => {

  return (
    <li className={classes.ToDoListItem}>
      <div className={classes.ItemWrapper}>
        <span className={classNames(classes.ItemIcon, 
          {[classes.Check]: checked && changeTheme === "dark"},
          {[classes.CheckLightTheme]: checked && changeTheme === "light"})}
          onClick={() => checkToDoHandler(id)}
        >
          { checked 
              ? <SVGiconsSelector id="checkBold" className={classes.CheckBoldIcon} /> 
              : <SVGiconsSelector id="checkboxBlankCircle" />
          }
        </span>
      </div>
      
      <div className={classes.ToDoWrapper}>
        { edit
            ? <Input 
                value={textToDo} 
                onChange={(ev) => editingToDoHandler(ev, id)} 
                onKeyPress={(ev) => finishedEditingKeyEnterHandler(ev, id)} 
                changeTheme={changeTheme}
              />
            : <span className={classNames(
                {[classes.CheckText]: checked && changeTheme === "dark"}, 
                {[classes.ItemText]: changeTheme === "dark"}, 
                {[classes.CheckTextLightTheme]: checked && changeTheme === "light"},
                {[classes.LightTheme]: changeTheme === "light"})}
              >
                {textToDo}
              </span>
        }
      </div>

      <div className={classes.ButtonWrapper}>
        <Button onClick={() => viewOrEditToDoHandler(id)}>
          <SVGiconsSelector id="edit" />
        </Button>
        <Button onClick={() => removeHandler(id)}>
          <SVGiconsSelector id="delete" />
        </Button>
      </div>
    </li>
  );
};

export default ToDoListItem;
