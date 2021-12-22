import React, { useState } from "react";
import classes from "./ToDoPage.module.scss";
import Input from "../UI/Input/Input";
import ToDoList from "./ToDoList/ToDoList";
import { SVGiconsSelector } from "../UI/SVGiconsSelector/SVGiconsSelector";

const ToDoPage = () => {
  const [myToDo, setMyToDo] = useState([]);
  const [textToDo, setTextToDo] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const objToDo = { id: Date.now(), textToDo };
    setMyToDo([...myToDo, objToDo]);
    setTextToDo("");
  };

  console.log("textToDo ", textToDo);
  console.log("myToDo ", myToDo);

  const removeHandler = (id) => {
    setMyToDo(myToDo.filter((i) => i.id !== id));
  };

  return (
    <div className={classes.ToDoPage}>
      <div className={classes.ToDoWrapper}>

        <form onSubmit={handleSubmit} className={classes.FormWrapper}>
          <span className={classes.IconWrapper}>
            <SVGiconsSelector id="checkboxBlankCircle" />
          </span>
          <Input
            type="text"
            value={textToDo}
            placeholder="enter value"
            onChange={(ev) => setTextToDo(ev.target.value)}
          />
        </form>

        { myToDo.length 
          ? <ToDoList myToDo={myToDo} removeHandler={removeHandler} />
          : <span className={classes.EmptyToDo}>To-do list is empty</span>
        }
      </div>
    </div>
  );
};

export default ToDoPage;