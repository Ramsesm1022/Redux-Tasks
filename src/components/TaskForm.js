import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import '../css/component.css'

function TaskForm() {

    const [tasks, setTask] = useState({
        title: '',
        description: '',
    })

    const dispatch = useDispatch()

    const handleChange = e => {
        setTask({
            ...tasks,
            [e.target.name]: e.target.value
        })
    };

    const handlesubmit = e => {
        e.preventDefault()
        dispatch(addTask({
            ...tasks,
            id: uuid(),
        }));
    }

    return (
        <form onSubmit={handlesubmit}>
            <input name='title' type="text" placeholder='title' onChange={handleChange} />

            <textarea name='description' placeholder='description' onChange={handleChange}></textarea>

            <button>Save</button>


        </form>
    )
}

export default TaskForm