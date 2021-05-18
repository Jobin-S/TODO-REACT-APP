import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

function CheckedTodo({ checkToggle, toDos, deleteToggle, editToggle }) {
  return (
    <div className="todo-app">
      <h1>Completed Task</h1>

      {toDos.map(({ id, text, checked, deleted }) => {
        if (!checked) return null;
        if (deleted) return null;
        return (
          <div className={"todo-row"}>
            <div onClick={() => checkToggle(id)}>
              {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
            </div>
            <div>{text}</div>
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

export default CheckedTodo;
