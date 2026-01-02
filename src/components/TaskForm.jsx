import { useState } from 'react'

function TaskForm({ setTasks }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('Priority')
    const [dueDate, setDueDate] = useState('')

    const addTask = () => {
    if (!title.trim()) {
        alert('Title is required')
        return
    }

    setTasks(tasks => [
        ...tasks,
        {
        id: Date.now(),
        title,
        description,
        priority,
        status: 'Pending',
        dueDate,
        createdAt: new Date().toISOString()
        }
    ])

    setTitle('')
    setDescription('')
    setPriority('Medium')
    setDueDate('')
    }

    return (
    <div className="task-form">
        <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        />

        <input
        type="text"
        placeholder="Short description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        />

        <div className="input-box">
        <select value={priority} onChange={e => setPriority(e.target.value)}>
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
        </select>
        </div>

        <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
    </div>
    )
}
export default TaskForm;