import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import FocusTimer from '../components/FocusTimer'
import useLocalStorage from '../hooks/LocalStorage'
import { useMemo, useState } from 'react'


function Dashboard() {
const [tasks, setTasks] = useLocalStorage('tasks', [])
const [filters, setFilters] = useState({ status: 'all', priority: 'all', search: '', sort: 'created' })


const filteredTasks = useMemo(() => {
return tasks
.filter(t => filters.status === 'all' || t.status === filters.status)
.filter(t => filters.priority === 'all' || t.priority === filters.priority)
.filter(t => t.title.toLowerCase().includes(filters.search.toLowerCase()))
}, [tasks, filters])


return (
<div className="layout">
<Header />
<Sidebar setFilters={setFilters} />
<main>
  <div className="card">
    <FocusTimer />
  </div>

  <div className="card">
    <TaskForm setTasks={setTasks} />
  </div>

  <div className="card">
    <TaskList tasks={filteredTasks} setTasks={setTasks} />
  </div>
</main>

</div>
)
}
export default Dashboard;