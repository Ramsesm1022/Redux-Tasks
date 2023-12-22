import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../css/component.css'





function TaskButtons() {
    const navigate = useNavigate()
    return (
        <>
            <div className="container" >
                <button className="button" onClick={() => navigate('/TaskList')}>
                    Task
                </button>
                <button className="button" onClick={() => navigate('/Item-List')}>
                    Listado
                </button>
            </div>
        </>

    )
}

export default TaskButtons