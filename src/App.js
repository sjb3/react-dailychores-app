import React, { Component } from 'react';
import { Button } from './App.style';

import './App.css';
import 'normalize.css';

class App extends Component {

  details(index) {
    var todos = this.state.todos;
    var todo = todos.find( (todo) => {
      return todo.counter === index
    });
    console.log(todo);
  }

  removeTodo(index) {
    var todos = this.state.todos;
    var todo = todos.find( (todo) => {
      return todo.counter === index
    });
    todos.splice(todo, 1);
    this.setState({
      todos: todos
    });
  }

  addTodo(e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var completed = this.refs.completed.value;
    var counter = this.state.counter;

    var todo = {
      name,
      completed,
      counter
    };
    counter+=1;
    var todos = this.state.todos;
    todos.push(todo);

    this.setState({
      todos: todos,
      counter: counter
    });
    this.refs.todoForm.reset();
  }

  constructor() {
    super();
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.details = this.details.bind(this);
    this.state = {
      todos: [],
      title: '"Simple Daily Chores App"',
      counter: 0
    }
  }

  render() {
    var title = this.state.title;
    var todos = this.state.todos;
    return (
      <div className="App">
        <h1>{title}</h1>
        <form ref="todoForm">
          <input type="text" ref="name" placeholder="To be done"/>
          <input type="text" ref="completed" placeholder="done yet?"/>
          <Button onClick={this.addTodo}>Add Todo</Button>
        </form>

        <ul>
          {todos.map(( todo => <li key={todo.counter}>{todo.name}
            <button onClick={this.removeTodo.bind(null, todo.counter)}>Remove</button>
            <button onClick={this.details.bind(null, todo.counter)}>Details</button>

            </li> ))}
        </ul>
      </div>
    );
  }
}

export default App;
