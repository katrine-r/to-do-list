import React from "react";
import classes from "./HeaderBackground.module.scss";
import architecture from "../../../images/architecture-g4668b87fd_500.jpg";
import mountains from '../../../images/pexels-tom-nagel-3878622_1920_500.jpg'
import classNames from "classnames";

const HeaderBackground = ({changeTheme}) => {
  return (
    <div className={classes.HeaderBackground}>
      { changeTheme === "dark"
        ? <img src={architecture} alt="architecture" />
        : <img src={mountains} alt="mountains" />
      }
      <div className={classNames(
        {[classes.HeaderGradient]: changeTheme === "dark"}, 
        {[classes.LightTheme]: changeTheme === "light"})}
      >
      </div>
    </div>
  );
};

export default HeaderBackground;
