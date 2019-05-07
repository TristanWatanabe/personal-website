import React, {Component} from 'react'
import axios from 'axios';

export default class CreateTodo extends Component {
  constructor() {
    super()
    this.state = {
      taskName: '',
      assignee: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState(
        {[event.target.name]: event.target.value}
    )
  }
  async handleSubmit(event) {
    event.preventDefault()
    const res = await axios.post('/api/todos', {taskName: this.state.taskName, assignee: this.state.assignee});
    this.props.add(res.data);
    this.setState({
      taskName: '',
      assignee: ''
    });
    
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='taskName'>Task Name</label>
        <input type='text' name='taskName' value={this.state.taskName} onChange={this.handleChange}/>
        <label htmlFor='assignee'>Assign To</label>
        <input type='text' name='assignee' value={this.state.assignee} onChange={this.handleChange}/>
        <button type='submit'>Submit</button>
      </form>

    )
  }
}
