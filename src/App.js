import "./App.css";
import Layout from "./hoc/Layout/Layout";
import ToDoPage  from './components/ToDoPage/ToDoPage';
import { useState } from "react";

function App() {

  const [changeTheme, setChangeTheme] = useState("dark")

  const onChangeThemeHandler = (changeTheme) => {
    if (changeTheme === "dark") {
      setChangeTheme("light")
    } else {
      setChangeTheme("dark")
    }
  }

  return (
    <div className="App">
      <Layout 
        changeTheme={changeTheme}
        onChangeThemeHandler={onChangeThemeHandler}
      >
        <ToDoPage changeTheme={changeTheme} />
      </Layout>
    </div>
  );
}

export default App;
