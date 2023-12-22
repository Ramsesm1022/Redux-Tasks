// TaskFormModal.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import '../css/component.css';

function TaskFormModal({ closeModal }) {
  const [tasks, setTask] = useState({
    title: '',
    description: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    setTask({
      ...tasks,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {

    if (tasks.title.trim() === '' || tasks.description.trim() === '') {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    e.preventDefault();
    dispatch(addTask({
      ...tasks,
      id: uuid(),
    }));
    closeModal();
    navigate('/');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input name="title" type="text" placeholder="Title" onChange={handleChange} />

          <label>Description:</label>
          <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>

          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormModal;
