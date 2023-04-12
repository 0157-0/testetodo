import React, { useState, useEffect, useRef } from "react";
import { Card, Col, Row } from "antd";


function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [inputTwo, setInputTwo] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);
  const inputRefTwo = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  useEffect(() => {
    inputRefTwo.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
      title: inputTwo,
    });

    console.log(input);

    setInput("");
    setInputTwo("");
  };

  const handleChange = (e) => {
    console.log("e", e)
    setInput(e.target.value);
  };


  // ver aquele ...data: inputTwo :e.target.value
  const handleChangeTitle = (e) => {
    setInputTwo(e.target.value);
  };
  console.log("1", input);
  console.log("two", inputTwo);

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <Card bordered={false}>
            <input
              type="text"
              placeholder="Atualizar item"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
            />
            <input
              type="text"
              placeholder="Atualizar item"
              value={inputTwo}
              name="title"
              className="todo-input edit"
              onChange={handleChangeTitle}
              ref={inputRefTwo}
            />
            <button onClick={handleSubmit} className="todo-button edit">
              Atualizar
            </button>
          </Card>
        </>
      ) : (
        <>
          {/* <input
                        type="text"
                        placeholder="Adicionar"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    /> */}
          <Card bordered={false}>
            <input
              type="text"
              placeholder="Adicionar o tiulo"
              value={inputTwo}
              name="title"
              className="todo-input"
              onChange={handleChangeTitle}
              ref={inputRefTwo}
            />
            <input
              type="text"
              placeholder="Adicionar"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />
            <button onClick={handleSubmit} className="todo-button">
              Adicionar
            </button>
          </Card>
        </>
      )}
    </form>
  );
}

export default TodoForm;
