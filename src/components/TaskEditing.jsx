import { useState } from 'react'

function TaskEditting({ task, setTasks, onClose }) {
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [priority, setPriority] = useState(task.priority)
    const [dueDate, setDueDate] = useState(task.dueDate)

    const save = () => {
    if (!title.trim()) return

    setTasks(tasks =>
        tasks.map(t =>
        t.id === task.id
            ? { ...t, title, description, priority, dueDate }
            : t
        )
    )
    onClose()
    }

    return (
    <div className="modal-backdrop">
        <div className="modal">
        <h2>Edit Task</h2>

        <input value={title} onChange={e => setTitle(e.target.value)} />

        <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
        />

        <select value={priority} onChange={e => setPriority(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
        </select>

        <input
            type="date"
            value={dueDate}
            onChange={e => setDueDate(e.target.value)}
        />

        <div className="modal-actions">
            <button onClick={onClose}>Cancel</button>
            <button onClick={save}>Save</button>
        </div>
        </div>
    </div>
    )
}
export default TaskEditting;