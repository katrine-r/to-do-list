import React from "react";
import classes from "./Layout.module.scss";
import HeaderBackground from "../../components/UI/HeaderBackground/HeaderBackground";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <main>
        <div className={classes.Header}>
          <HeaderBackground />
          <div className={classes.HeaderWrapper}>
            <div className={classes.HeaderTitleWrapper}>
              <h1>ToDo</h1>
            </div>
            {props.children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
