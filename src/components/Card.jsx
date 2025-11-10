import { useState } from 'react'

export default function Card(props) {

    const [task, setTask] = useState(props.array)
    const [newTask, setNewTask] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        if (newTask.length > 1) {

            const newArray = [...task, { id: task.length + 1, title: newTask }]

            setTask(newArray)
        } else {
            console.log('error');

        }
    }

    return (

        <div className="card p-4">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="New Title" aria-label="New Title" aria-describedby="add-title" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    <button className="btn btn-outline-secondary" type="submit" id="add-title">Add</button>
                </div>
            </form>
            <ul className='list-group'>
                {task.map(items => (
                    <li key={items.id} className='list-group-item'>{items.title}</li>
                )
                )}
            </ul>
        </div>
    )
}