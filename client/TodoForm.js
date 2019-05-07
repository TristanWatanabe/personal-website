import React from 'react';

export default function TodoForm (props) {
    let button;
    if (!props.task.taskName) {
        button = true;
    } else {
        if (props.task.assignee) {
            button = false;
        } else {
            button = true;
        }
    }
    return (
        <form onSubmit={props.handleSubmit}>
            <label htmlFor='taskName'>Task Name<span className='warning'>Field is required!</span> </label>
            <input type='text' name='taskName' value={props.task.taskName} onChange={props.handleChange}/>
            <label htmlFor='assignee'>Assign To<span className='warning'>Field is required!</span> </label>
            <input type='text' name='assignee' value={props.task.assignee} onChange={props.handleChange}/>
            <button type='submit' disabled={button}>Submit</button>
        </form>
    )

}

