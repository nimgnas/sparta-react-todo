import React, { useRef, useState } from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import Layout from "../layout/Layout";
import List from "../list/List";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      body: "가즈아~~",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부하기22",
      body: "가즈아22~~",
      isDone: false,
    },
  ]);
  const [inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const nextId = useRef(2);

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { title, body } = inputs;
    if (!title.trim() || !body.trim()) return;

    const todo = {
      id: (nextId.current += 1),
      title,
      body,
      isDone: false,
    };
    setTodos([...todos, todo]);
    setInputs({
      title: "",
      body: "",
    });
  };

  const onDeleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const isDoneToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Layout>
      <Header />
      <Form
        inputs={inputs}
        onSubmitHandler={onSubmitHandler}
        onChangeHandler={onChangeHandler}
      />
      <List
        todos={todos}
        onDeleteHandler={onDeleteHandler}
        isDoneToggle={isDoneToggle}
      />
    </Layout>
  );
}

export default TodoList;
