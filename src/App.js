import "./App.css";
import { useState } from "react";
import Swal from "sweetalert2";
import Todo from "./components/Todo";
import CheckedTodo from "./components/CheckedTodo";
import RemovedTodo from "./components/RemovedTodo";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    if (newTodo === "") return;
    setToDos([
      { id: Date.now(), text: newTodo, checked: false, deleted: false },
      ...toDos,
    ]);
    setNewTodo("");
  };

  const checkToggle = (id) => {
    setToDos(
      toDos.filter((todo) => {
        if (todo.id === id) {
          todo.checked = todo.checked ? false : true;
        }
        return todo;
      })
    );
  };

  const deleteToggle = (id) => {
    setToDos(
      toDos.filter((todo) => {
        if (todo.id === id) {
          todo.deleted = todo.deleted ? false : true;
        }
        return todo;
      })
    );
  };

  const editToggle = async (id) => {
    const { value: editedTask } = await Swal.fire({
      title: "Rename Task",
      input: "text",
      inputPlaceholder: "Enter Here",
    });

    if (editedTask) {
      setToDos(
        toDos.filter((todo) => {
          if (todo.id === id) {
            todo.text = editedTask;
          }
          return todo;
        })
      );
    }
  };

  return (
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
  );
}

export default App;
