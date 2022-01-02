import React from "react";
import classes from "./Layout.module.scss";
import HeaderBackground from "../../components/UI/HeaderBackground/HeaderBackground";
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import classNames from "classnames";

const Layout = ({changeTheme, onChangeThemeHandler, children}) => {

  return (
    <div className={classNames(classes.Layout, 
      {[classes.LightTheme]: changeTheme === "light"})}
    >
      <main>
        <div className={classes.Header}>
          <HeaderBackground 
            changeTheme={changeTheme}
          />
          <div className={classes.HeaderWrapper}>
            <div className={classes.HeaderTitleWrapper}>
              <HeaderTitle 
                changeTheme={changeTheme}
                onChangeThemeHandler={onChangeThemeHandler} 
              />
            </div>
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
