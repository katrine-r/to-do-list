import "./App.css";
import Layout from "./hoc/Layout/Layout";
import ToDoPage  from "./components/ToDoPage/ToDoPage";
import { useState } from "react";
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

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
        <DndProvider backend={HTML5Backend}>
          <ToDoPage changeTheme={changeTheme} />
        </DndProvider>
      </Layout>
    </div>
  );
}

export default App;
