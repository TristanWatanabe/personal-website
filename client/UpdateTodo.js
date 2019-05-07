import React, {Component} from 'react'
import TodoForm from './TodoForm'
import Axios from 'axios';

export default class UpdateTodo extends Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      assignee: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    try {
      event.preventDefault();
      const id = this.props.todo.id;
      const res = await Axios.put(`/api/todos/${id}`, {
        taskName: this.state.taskName, 
        assignee: this.state.assignee
        });

      this.props.update(res.data);
      
      this.setState({
        taskName: '',
        assignee: ''
      });


    } catch (error) {
        console.log(error)
    }
  }



  render () {
    return (
      <TodoForm task = {this.state} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit}/>
    )
  }
}
