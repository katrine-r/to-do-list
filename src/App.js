import "./App.css";
import Layout from "./hoc/Layout/Layout";
import ToDoPage  from './components/ToDoPage/ToDoPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <ToDoPage />
      </Layout>
    </div>
  );
}

export default App;
