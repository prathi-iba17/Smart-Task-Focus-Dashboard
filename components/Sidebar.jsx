function Sidebar({ setFilters }) {

return (
<aside className="sidebar">
<select onChange={e => setFilters(f => ({ ...f, status: e.target.value }))}>
<option value="all">All</option>
<option value="Pending">Pending Task</option>
<option value="Completed">Completed Task</option>
</select>


<select onChange={e => setFilters(f => ({ ...f, sort: e.target.value }))}>
  <option value="created">Sort by Created</option>
  <option value="due">Sort by Due Date</option>
  <option value="priority">Sort by Priority</option>
</select>



<input placeholder="Search" onChange={e => setFilters(f => ({ ...f, search: e.target.value }))} />
</aside>
)
}
export default Sidebar;