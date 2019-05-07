import React from 'react';

export default function TodoForm (props) {
    //console.log(props);
    return (
        <form onSubmit={props.handleSubmit}>
        <label htmlFor='taskName'>Task Name</label>
        <input type='text' name='taskName' value={props.task.taskName} onChange={props.handleChange}/>
        <label htmlFor='assignee'>Assign To</label>
        <input type='text' name='assignee' value={props.task.assignee} onChange={props.handleChange}/>
        <button type='submit'>Submit</button>
        </form>
    )

}

