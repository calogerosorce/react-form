import { useState } from 'react'


function App() {

  const task = [{
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


  return (
    <>
      <div className="container  text-center">
        <h1>Todos List</h1>
        <div className="card p-4">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="New Title" aria-label="New Title" aria-describedby="add-title" />
            <button className="btn btn-outline-secondary" type="submit" id="add-title">Add</button>
          </div>
          <ul className='list-group'>
            <li className='list-group-item'>Title</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
