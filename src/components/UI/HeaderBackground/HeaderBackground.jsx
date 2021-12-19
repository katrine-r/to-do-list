import React from "react";
import classes from "./HeaderBackground.module.scss";
import architecture from "../../../images/architecture-g4668b87fd_500.jpg";

const HeaderBackground = () => {
  return (
    <div className={classes.HeaderBackground}>
      <img src={architecture} alt="architecture" />
      <div className={classes.HeaderGradient}></div>
    </div>
  );
};

export default HeaderBackground;
