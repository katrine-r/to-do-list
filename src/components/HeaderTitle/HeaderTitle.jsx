import React from 'react'
import classes from './HeaderTitle.module.scss'
import { SVGiconsSelector } from '../UI/SVGiconsSelector/SVGiconsSelector'
import Button from '../UI/Button/Button'

const HeaderTitle = ({changeTheme, onChangeThemeHandler}) => {
  return (
    <div className={classes.HeaderTitle}>
      <div>
        <h1 className={classes.Title}>ToDo</h1>
      </div>

      <div>
        <Button 
          className={classes.Button} 
          onClick={() => onChangeThemeHandler(changeTheme)}
        >
          { changeTheme === "dark" 
              ? <SVGiconsSelector id="sunny" />
              : <SVGiconsSelector id="moon" />
          }
        </Button>
      </div>
    </div>
  )
}

export default HeaderTitle
