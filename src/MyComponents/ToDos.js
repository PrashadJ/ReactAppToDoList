import React from 'react'

export const ToDos = ({todo,onDelete}) => {
    return (
        <div>
            <p>{todo.srNo}: {todo.desc}</p>
            <button className='btn btn-danger' onClick = {()=>{onDelete(todo)}} >Danger</button>
        </div>
    )
}
