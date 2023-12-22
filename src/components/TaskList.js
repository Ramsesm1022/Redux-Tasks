import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import TaskFormModal from './TaskFormModal';
import '../css/component.css'

function TaskList() {

  const tasks = useSelector(state => state.tasks)
  console.log(tasks)

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <header>
        <h1>Hello</h1>
        <button onClick={openModal}>Create Task</button>
      </header>
      <div key={tasks.id}>
        {tasks.map(tasks => (
          <div>
            <h3>{tasks.title}</h3>
            <p>{tasks.description}</p>
          </div>
        ))}
      </div>
      {isModalOpen && <TaskFormModal closeModal={closeModal} />}
    </div>
  )
}

export default TaskList