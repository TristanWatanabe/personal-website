import React, {Component} from 'react'
import axios from 'axios';
import TodoForm from './TodoForm'

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
      <TodoForm 
        task = {this.state} 
        handleChange = {this.handleChange} 
        handleSubmit = {this.handleSubmit}
        />

    )
  }
}
