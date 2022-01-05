import React from "react";
import classes from "./Input.module.scss";
import classNames from "classnames";

const Input = (props) => {

  const {changeTheme, ...restProps} = props;

  return (
    <input className={classNames(classes.Input, 
      {[classes.LightTheme]: changeTheme === "light"})} {...restProps} 
    />
  );
};

export default Input;
