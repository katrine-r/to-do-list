import React, { useContext } from "react";
import classes from "./ToDoList.module.scss";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import classNames from "classnames";
import { SVGiconsSelector } from "../../UI/SVGiconsSelector/SVGiconsSelector";
import Button from "../../UI/Button/Button";
import { ChangeThemeContext } from "../../../context";

const ToDoList = ({
  removeHandler, 
  checkToDoHandler, 
  filteredMyToDo,
  filteredActiveCompleted,
  isActive,
  sortedActiveCompleted,
  sortedAlphabetical,
  removeCompletedToDoHandler,
  viewOrEditToDoHandler,
  editingToDoHandler,
  finishedEditingKeyEnterHandler,
  moveCardToDo
}) => {

  const {changeTheme} = useContext(ChangeThemeContext)

  return (
    <div className={classNames(classes.ToDoList, 
      {[classes.LightTheme]: changeTheme === "light"})}
    >
      <ul>
        {filteredMyToDo.map((textItem, index) => {
          return (
            <ToDoListItem
              key={index}
              index={index}
              id={textItem.id}
              textToDo={textItem.textToDo}
              removeHandler={removeHandler}
              checkToDoHandler={checkToDoHandler}
              checked={textItem.checked}
              viewOrEditToDoHandler={viewOrEditToDoHandler}
              edit={textItem.edit}
              editingToDoHandler={editingToDoHandler}
              finishedEditingKeyEnterHandler={finishedEditingKeyEnterHandler}
              moveCardToDo={moveCardToDo}
            />
          );
        })}

        <li className={classes.ListItemButtonWrapper}>
          <div>
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
          </div>

          <div className={classes.ListItemButton}>
            <div>
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
            </div>

            <div>
              <Button onClick={() => removeCompletedToDoHandler()}>
                <SVGiconsSelector id="deleteChecked" />
              </Button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ToDoList;
