import React from "react";
import Task from "./Task";
import "../CSS/TaskCard.css";

function TodoList({ todoList, deleteTask, doneAndundone, updateTask }) {
    return (<div className="todolist">
      {todoList.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} doneAndundone={doneAndundone} updateTask={updateTask}/>
      ))}
    </div>
  );
}

export default TodoList;
