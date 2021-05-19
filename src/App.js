import "./App.css";
import { useState } from "react";
import Swal from "sweetalert2";
import Todo from "./components/Todo";
import CheckedTodo from "./components/CheckedTodo";
import RemovedTodo from "./components/RemovedTodo";

function App() {
  const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem("toDos")) || []);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo === "") return;
    let newTodos = [
      { id: Date.now(), text: newTodo, checked: false, deleted: false },
      ...toDos,
    ]
    setToDos(newTodos);
    localStorage.setItem("toDos", JSON.stringify(newTodos))
    setNewTodo("");
  };

  const checkToggle = (id) => {
    let newTodos = toDos.filter((todo) => {
      if (todo.id === id) {
        todo.checked = todo.checked ? false : true;
      }
      return todo;
    })
    setToDos(newTodos);
    localStorage.setItem("toDos", JSON.stringify(newTodos))

  };

  const deleteToggle = (id) => {
    let newTodos = toDos.filter((todo) => {
      if (todo.id === id) {
        todo.deleted = todo.deleted ? false : true;
      }
      return todo;
    })
    setToDos(newTodos);
    localStorage.setItem("toDos", JSON.stringify(newTodos))

  };

  const editToggle = async (id) => {
    const { value: editedTask } = await Swal.fire({
      title: "Rename Task",
      input: "text",
      inputValue:toDos.find((todo)=>todo.id === id).text,
      inputPlaceholder: "Enter Here",
    });

    if (editedTask) {
      let newTodos =toDos.filter((todo) => {
        if (todo.id === id) {
          todo.text = editedTask;
        }
        return todo;
      })
      setToDos(newTodos);
    localStorage.setItem("toDos", JSON.stringify(newTodos))

    }
  };

  return (
    <>
    <h1 style={{    textAlign: 'center', fontSize:'350%', marginTop: '1em'}}
    >JOBIN'S TODO APP</h1>
    <div className="row">
      <Todo
        addNewTask={addNewTask}
        checkToggle={checkToggle}
        toDos={toDos}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        deleteToggle={deleteToggle}
        editToggle={editToggle}
      />
      <CheckedTodo
        checkToggle={checkToggle}
        toDos={toDos}
        editToggle={editToggle}
        deleteToggle={deleteToggle}
      />
      <RemovedTodo
        toDos={toDos}
        deleteToggle={deleteToggle}
        editToggle={editToggle}
      />
    </div>
    </>
  );
}

export default App;
