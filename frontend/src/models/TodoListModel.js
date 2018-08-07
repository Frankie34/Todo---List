import { observable, computed, action } from "mobx";
import TodoModel from "./TodoModel";

export default class TodoListModel {
  @observable todos = [];
  todos1 = [];


  @computed
  get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }

  @action
  addTodo(title, user, priority) {
    this.todos.push(new TodoModel(title, user, priority));
  }

  @action
  updateTodo(id, title, user, priority) {
  	this.todos[id].title = title;
  	this.todos[id].user = user;
  	this.todos[id].priority = priority;

  }

  @action
  destroy(id) {
    var i = id;
    this.todos.splice(i,1);
  }

}










