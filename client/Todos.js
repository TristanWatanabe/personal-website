import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import CreateTodo from './CreateTodo'

export default class Todos extends Component {
  constructor () {
    super()
    this.state = {
      todos: []
    }
    this.add = this.add.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  add(todo){
    const array = this.state.todos.slice();
    array.push(todo);
    console.log(todo);
    this.setState({
      todos: array
    });
  }
  async componentDidMount () {
    try {
      const res = await axios.get('/api/todos')
      this.setState({todos: res.data})
    } catch (err) {
      console.log(err);
    }

  }
  async handleRemove (id) {
     try {
       const res = await axios.delete(`/api/todos/${id}`)
       const arr = await axios.get('/api/todos')
       console.log('THIS IS ARR', arr.data);
       this.setState( {
         todos: arr.data
       })
     } catch (err) {
       console.log(err)
     }

    //this.setState({todos: })
  }

  render () {
    return (
      <div id='todos'>
        <CreateTodo add = {this.add}/>
        {
          this.state.todos.map(todo => <Todo todo={todo} key={todo.id} remove={this.handleRemove}/>)
        }
      </div>
    )
  }
}
