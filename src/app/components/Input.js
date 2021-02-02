import React from 'react'
import './Input.css'

const Input = () => {
    return (
        <div className='input'>
            <input type='input'/>
            <button onClick={addToDo}>Add!</button>

            
        </div>
    )
}

export default Input
