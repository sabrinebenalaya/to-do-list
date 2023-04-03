import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

import "../CSS/TaskCard.css";

function Task({ task, deleteTask, doneAndundone, updateTask }) {
  const HandelDeleteTask = () => deleteTask(task);
  const handelDone = () => doneAndundone(task.id);
  const [show, setShow] = useState(false);
  const [text, setText] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handelChange = (e) => {
    let newtext = e.target.value;
    setText(newtext);
  };
  const handleUpdate = (e) => {
    handelChange(e);
    updateTask(text, task.id);
    handleClose();
  };

  return (
    <>
      <div>
        <Card className="cart taskCart">
          <Card.Body>
            <h1 style={{ textDecoration: task.done ? "line-through" : "none" }}>
              {task.taskText}
            </h1>
            <div>
              <input type="checkbox" onClick={handelDone} />
              <label> Done</label>
            </div>
            <div>
              <Button variant="danger" onClick={HandelDeleteTask}>
                Delete
              </Button>
              <Button variant="primary" onClick={handleShow}>
                update
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder={task.taskText}
            onChange={handelChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Task;
