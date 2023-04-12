import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Modal } from "antd";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={showModal}>
        Titulo: {todo.title} <br />
        {todo.text}
      </div>
      <Modal title={todo.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p> Descrição: {todo.text}</p>
      </Modal>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() =>
            setEdit({ id: todo.id, value: todo.text && todo.title })
          }
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Todo;
