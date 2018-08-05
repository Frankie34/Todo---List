import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import $ from 'jquery';
import Todo from "./Todo";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


@observer
class TodoList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          res0: "",
          res1: "",
          res2: "",
          res3: "",
          res4: "",
          len: 1,
      }
      this.todo = []
  }


  @observable newTodoTitle = "";
  @observable newTodoUser = "";
  @observable newTodoPriority = "";
  @observable num = "";
  @observable num1 = "";

  render() {
    return (
      <div>
      <div>
        <form onSubmit={this.handleFormSubmit1}>
          Todo:
          <input className = "input"
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange0}
          />
          <input className = "input"
            type="text"
            value={this.newTodoUser}
            onChange={this.handleInputChange1}
          />
          <input className = "input"
            type="text"
            value={this.newTodoPriority}
            onChange={this.handleInputChange2}
          />
          <button className = "btn"type="submit">Add</button>
        </form>
      </div>
      <div>
        <form onSubmit={this.handleFormSubmit0}>
          Update Num:
          <input className = "input"
            type="text"
            value={this.num}
            onChange={this.handleInputChange3}
          />
          <button className = "btn" type="submit">Update</button>
        </form>
      </div>
      <div>
        <form onSubmit={this.handleFormSubmit2}>
          Delete Num:
          <input className = "input"
            type="text"
            value={this.num1}
            onChange={this.handleInputChange4}
          />
          <button className = "btn" type="submit">Delete</button>
        </form>
      </div>
      <div>
        <form onSubmit={this.get0}>
        <button className = "btn" type="submit">Sync</button>
        </form>
      </div>


        <hr />
        <ul>
          {this.props.store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.store.unfinishedTodoCount}
      </div>
    );
  }

  @action
  handleInputChange0 = e => {
    this.newTodoTitle = e.target.value;
  };
  @action
  handleInputChange1 = e => {
    this.newTodoUser = e.target.value;
  };
  @action
  handleInputChange2 = e => {
    this.newTodoPriority = e.target.value;
  };
  @action
  handleInputChange3 = e => {
    this.num = e.target.value;
  };
  @action
  handleInputChange4 = e => {
    this.num1 = e.target.value;
  };

  @action
  handleFormSubmit0 = e => {
    this.props.store.updateTodo(this.num, this.newTodoTitle, this.newTodoUser, this.newTodoPriority);
    this.newTodoTitle = "";
    this.newTodoUser = "";
    this.newTodoPriority = "";
    this.num = "";
    e.preventDefault();
  };
  @action
  handleFormSubmit1 = e => {
    const react_this = this;
    var url="http://127.0.0.1:8000/todo/";
    var user = 1;
    var todo = "";
    var flag = "0";
    var priority = "0";
    this.props.store.addTodo(this.newTodoTitle, this.newTodoUser, this.newTodoPriority);
    todo = this.newTodoTitle;
    priority = this.newTodoPriority;
    $.post(url,{user:user, todo:todo, flag:flag, priority:priority}, function(result){
            console.log(result)
            react_this.setState({res:result});
        })
    this.newTodoTitle = "";
    this.newTodoUser = "";
    this.newTodoPriority = "";
    e.preventDefault();
  };
  @action
  handleFormSubmit2 = e => {
    this.props.store.destroy(this.num1);
    e.preventDefault();
  };
  @action
  get0 = e => {
    var i = 0;
    var url="http://127.0.0.1:8000/todo/";
    const react_this = this;
    $.get(url, function(result){
      this.todo = result;
      console.log(result.length);
      if(react_this.state.len <= this.todo.length) {
        i = react_this.state.len - 1;
        react_this.setState({len:react_this.state.len + 1, res0:this.todo[i].user, res1:this.todo[i].todo, res2:this.todo[i].flag, res3:this.todo[i].priority, res4:this.todo[i].pubtime});
        console.log(react_this.state.res1);
        react_this.props.store.addTodo(react_this.state.res1, react_this.state.res0, react_this.state.res3);
      }
    })
    e.preventDefault();
  };
}

export default TodoList;
