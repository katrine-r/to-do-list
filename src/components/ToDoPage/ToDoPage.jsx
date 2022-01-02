import React, { useMemo, useState, useEffect } from "react";
import classes from "./ToDoPage.module.scss";
import Input from "../UI/Input/Input";
import ToDoList from "./ToDoList/ToDoList";
import { SVGiconsSelector } from "../UI/SVGiconsSelector/SVGiconsSelector";
import classNames from "classnames";

const ToDoPage = ({changeTheme}) => {
  const [myToDo, setMyToDo] = useState(
    () => {
        const saved = localStorage.getItem("myToDo");
        const initialValue = JSON.parse(saved);
        return initialValue || [];
      }
    );
  const [textToDo, setTextToDo] = useState("");
  const [searchToDo, setSearchToDo] = useState("");
  const [filteredMyToDo, setFilteredMyToDo] = useState(myToDo)
  const [isActive, setIsActive] = useState("all")

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const objToDo = { id: Date.now(), textToDo, checked: false};
    setMyToDo([...myToDo, objToDo]);
    setTextToDo("");
    setIsActive("all")
  };

  const removeHandler = (id) => {
    setMyToDo(myToDo.filter((i) => i.id !== id));
    setIsActive("all")
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
    })
    setMyToDo(checkMyToDo)
  }

  const filterToDo = useMemo(() => { 
    if (searchToDo) {
      return filteredMyToDo.filter(i => i.textToDo.includes(searchToDo))
    } else {
      return filteredMyToDo
    }
  }, [searchToDo, filteredMyToDo])

  const filteredActiveCompleted = (checked) => {
    if (checked === "all") {
      setFilteredMyToDo(myToDo)
    } else {
      const filtered = [...myToDo].filter(i => i.checked === checked)
      setFilteredMyToDo(filtered)
    }
    setIsActive(checked)
  }

  const sortedActiveCompleted = (checked) => {
    if (checked) {
      setFilteredMyToDo([...filteredMyToDo.sort((a, b) => {
        return b.checked - a.checked
      })
      ])
    } else {
      setFilteredMyToDo([...filteredMyToDo.sort((a, b) => {
        return a.checked - b.checked
      })
      ])
    }
  }

  const sortedAlphabetical = (sorted) => {
    if (sorted === "ascending") {
      setFilteredMyToDo([...filteredMyToDo.sort((a, b) => {
        return a.textToDo.localeCompare(b.textToDo)
      })
      ])
    } else {
      setFilteredMyToDo([...filteredMyToDo.sort((a, b) => {
        return b.textToDo.localeCompare(a.textToDo)
      })
      ])
    }
  }

  useEffect(() => {
    setFilteredMyToDo(myToDo)
    window.localStorage.setItem("myToDo", JSON.stringify(myToDo));
  }, [myToDo])

  return (
    <div className={classes.ToDoPage}>
      <div className={classes.ToDoWrapper}>

        <div className={classNames(classes.SearchWrapper, 
          {[classes.LightTheme]: changeTheme === "light"})}
        >
          <span className={classes.IconWrapper}>
            <SVGiconsSelector id="search" />
          </span>

          <Input
            type="text"
            value={searchToDo}
            placeholder="Search"
            onChange={(ev) => setSearchToDo(ev.target.value)}
            changeTheme={changeTheme}
          />
        </div>

        <form onSubmit={handleSubmit} className={classNames(classes.FormWrapper, 
          {[classes.LightTheme]: changeTheme === "light"})}
        >
          <span className={classes.IconWrapper}>
            <SVGiconsSelector id="keyboard" />
          </span>
          
          <Input
            type="text"
            value={textToDo}
            placeholder="Enter value"
            onChange={(ev) => setTextToDo(ev.target.value)}
            changeTheme={changeTheme}
          />
        </form>

        { myToDo.length 
          ? <ToDoList 
              filteredMyToDo={filterToDo} 
              removeHandler={removeHandler} 
              checkToDoHandler={checkToDoHandler} 
              filteredActiveCompleted={filteredActiveCompleted} 
              isActive={isActive}
              sortedActiveCompleted={sortedActiveCompleted}
              sortedAlphabetical={sortedAlphabetical}
              changeTheme={changeTheme}
            />
          : <span className={classes.EmptyToDo}>To-do list is empty</span>
        }
      </div>
    </div>
  );
};

export default ToDoPage;
