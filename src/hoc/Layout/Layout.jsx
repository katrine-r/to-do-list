import React, { useContext } from "react";
import classes from "./Layout.module.scss";
import HeaderBackground from "../../components/HeaderBackground/HeaderBackground"
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import classNames from "classnames";
import { ChangeThemeContext } from "../../context";

const Layout = ({ onChangeThemeHandler, children }) => {

  const {changeTheme} = useContext(ChangeThemeContext)

  return (
    <div className={classNames(classes.Layout, 
      {[classes.LightTheme]: changeTheme === "light"})}
    >
      <main>
        <div className={classes.Header}>
          <HeaderBackground />
          <div className={classes.HeaderWrapper}>
            <div className={classes.HeaderTitleWrapper}>
              <HeaderTitle onChangeThemeHandler={onChangeThemeHandler} />
            </div>
            { children }
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
