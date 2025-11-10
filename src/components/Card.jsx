import { useState } from 'react'

export default function Card({ array }) {

    const [task, setTask] = useState(array)
    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState(null)
    function handleSubmit(e) {
        e.preventDefault()
        if (newTask.length > 1) {

            const newArray = [...task, { id: task.length + 1, title: newTask }]

            setTask(newArray)

            setNewTask('')
        } else if (--task.length) {

            const newArray = [{ id: task.length - 1, title: newTask }]

            setTask(newArray)
        } else {
            setError('Insert chars for compiled form')
        }



    }
    function handleTrash(i) {
        const removeTask = task.filter((element, index) => index !== i)

        setTask(removeTask)


    }

    return (

        <div className="card p-4">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="New Title" aria-label="New Title" aria-describedby="add-title" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    <button className="btn btn-outline-secondary" type="submit" id="add-title">Add</button>
                </div>
                {error && <small className='text-danger'>{error}</small>}

            </form>
            <ul className='list-group'>
                {task.map((items, i) => (
                    <li key={items.id} className='list-group-item d-flex justify-content-between'>
                        {items.title}
                        <button className='btn btn-sm btn-danger' onClick={() => handleTrash(i)}>
                            <i className='bi bi-trash'></i>
                        </button>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}