import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function RemovedTodo({ toDos, deleteToggle }) {
  return (
    <div className="todo-app">
      <h1>removed Task</h1>

      {toDos.map(({ id, text, checked, deleted, editToggle }) => {
        if (!checked && !deleted) return null;
        // if(checked) return null
        if (!deleted) return null;
        return (
          <div className={"todo-row"}>
            {/* <div onClick={() => checkToggle(id)}>
              {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            </div> */}
            <div style={{ margin: "auto" }}>{text}</div>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => deleteToggle(id)}
                className="delete-icon"
              />
              <TiEdit onClick={() => editToggle(id)} className="edit-icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RemovedTodo;
