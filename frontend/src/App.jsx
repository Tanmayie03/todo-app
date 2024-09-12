import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos").then(async function (res) {
      const json = await res.json();
      setTodos(json.todos);
    });
  }, [todos]);
  return (
    <div className="bg-white">
      <h1 className="text-3xl  text-blue-400 text-center  font-bold py-6 ">
        ToDo List App
      </h1>
      <div className="bg-blue-100 p-12 items-center">
        <CreateTodo />
        <Todos todos={todos} />
      </div>
    </div>
  );
}

export default App;
