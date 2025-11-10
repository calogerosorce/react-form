import { useState } from 'react'


function App() {

  const tasks = [{
    id: 1,
    title: 'Learn React'
  },
  {
    id: 2,
    title: 'Build a React App'
  },
  {
    id: 3,
    title: 'Deploy the App'
  }, {
    id: 4,
    title: 'Celebrate!'
  }]

  const [newTask, setNewTask] = useState('')
  function handleSubmit(e) {
    e.preventDefault()

  }

  return (
    <>
      <div className="container  text-center">
        <h1>Todos List</h1>
        <div className="card p-4">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="New Title" aria-label="New Title" aria-describedby="add-title" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
              <button className="btn btn-outline-secondary" type="submit" id="add-title">Add</button>
            </div>
          </form>
          <ul className='list-group'>
            {tasks.map(items => (
              <li key={items.id} className='list-group-item'>{items.title}</li>
            )
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
