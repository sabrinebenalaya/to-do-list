import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

function InputList({ addTask }) {
  const [newTask, setNewTask] = useState();
  console.log("new task =", newTask);
  const HandelNewTask = (e) => {
    setNewTask({
      ...newTask,
      id: uuidv4(),
      taskText: e.target.value,
      done: false,
    });
  };

  const HandelAddTask = (event) => {
    event.preventDefault();
    addTask(newTask);
    intTaskText();
  };

  const intTaskText = () => {
    setNewTask({ ...newTask, taskText: " " });
    console.log("init ", newTask);
  };

  return (
    <div className="inputList">
      <Form onSubmit={HandelAddTask}>
        <Form.Group className="mb-3">
          <Form.Label>New Task</Form.Label>
          <input type="text" onChange={HandelNewTask} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InputList;
