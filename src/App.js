import React, { Component } from 'react';
import ToDos from './components/ToDos'
import Header from './components/layout/Header'
import AddToDo from './components/AddTodo'
import uuid from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './components/pages/about'

import './App.css'
class ToDo extends Component {

  state = {
    todos: [] //array of objects
  }
  markComplete = (id) => {
    this.setState({todos : this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})    
  }

  delTodo = (id) => {
    this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      title : title,
      completed : false
    }
    this.setState({ todos : [...this.state.todos, newTodo]})
  }
  render() { 
    return (
      <Router>
        <React.Fragment>
          <div className = "container">

            <Header />
            <Route exact path = "/" render = {props => (
              <React.Fragment>
                <AddToDo addTodo = {this.addTodo}/>
                <ToDos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
              </React.Fragment>
            )}/>  

            <Route path = "/about" component = {About}
            />

          </div>
        </React.Fragment>
      </Router>
    );
  }
}
 
export default ToDo;
