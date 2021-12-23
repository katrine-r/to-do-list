import React, { useMemo, useState } from "react";
import classes from "./ToDoPage.module.scss";
import Input from "../UI/Input/Input";
import ToDoList from "./ToDoList/ToDoList";
import { SVGiconsSelector } from "../UI/SVGiconsSelector/SVGiconsSelector";

const ToDoPage = () => {
  const [myToDo, setMyToDo] = useState([]);
  const [textToDo, setTextToDo] = useState("");
  const [searchToDo, setSearchToDo] = useState("");
  const [checkToDo, setCheckToDo] = useState(false)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const objToDo = { id: Date.now(), textToDo, checked: false};
    setMyToDo([...myToDo, objToDo]);
    setTextToDo("");
  };

  console.log("textToDo ", textToDo);
  console.log("myToDo ", myToDo);

  const removeHandler = (id) => {
    setMyToDo(myToDo.filter((i) => i.id !== id));
  };

  const checkToDoHandler = (id) => {
    const checkMyToDo = myToDo.map((i) => {
      console.log('i', i)
      console.log('id', id)
      if (i.id === id) {
        return {...i, checked: !i.checked}
      } else {
        return i
      }
      // return i.id === id ? {...i, checked: !i.checked} : i
  })
  setMyToDo(checkMyToDo)
}

  const filterToDo = useMemo(() => {
    
      if (searchToDo) {
       return  myToDo.filter(i => i.textToDo.includes(searchToDo))
      } else {
        return myToDo
      }
      }, [searchToDo, myToDo])

  console.log('filterToDo', filterToDo)

  return (
    <div className={classes.ToDoPage}>
      <div className={classes.ToDoWrapper}>

      <Input
        type="text"
        value={searchToDo}
        placeholder="search"
        onChange={(ev) => setSearchToDo(ev.target.value)}
      />

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
          ? <ToDoList 
            myToDo={filterToDo} 
            removeHandler={removeHandler} 
            checkToDoHandler={checkToDoHandler} 
          />
          : <span className={classes.EmptyToDo}>To-do list is empty</span>
        }
      </div>
    </div>
  );
};

export default ToDoPage;
