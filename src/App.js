import "./App.css";
import InputList from "./Component/InputList";
import TodoList from "./Component/TodoList";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./CSS/TaskCard.css";
function App() {
  const [todoList, setTodoList] = useState([
    { id: "0", taskText: "task1", done: false },
    { id: "1", taskText: "task2", done: false },
    { id: "2", taskText: "task3", done: false },
  ]);

  const addTask = (task) => setTodoList([...todoList, task]);

  const deleteTask = (task) =>
    setTodoList(todoList.filter((el) => el !== task));

  const doneAndundone = (id) => {
    let tableupdate = todoList.map((el) => {
      if (el.id === id) {
        if (el.done) {
          el.done = false;
        } else {
          el.done = true;
        }
        return { ...el, done: el.done };
      } else {
        return el;
      }
    });
    setTodoList(tableupdate);
  };

  const updateTask=(text, id)=>{
    let table = todoList.map((el)=>{
      if (el.id === id){
        return {...el, taskText: text}
      }else{
        return el
      }
    })
    setTodoList(table)
  }

  return (
    <div className="container">
      <InputList addTask={addTask} />
      <TodoList
        todoList={todoList}
        deleteTask={deleteTask}
        doneAndundone={doneAndundone}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;
