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
    var i = 0;
    var j = 0;

    for(i = this.todos.length - 1;i > id;i = i - 1){
      this.todos1.push(new TodoModel(this.todos[i].title, this.todos[i].user, this.todos[i].priority));
      this.todos.pop();
    }

    this.todos.pop();

    for(;i < this.todos.length - 1;i = i + 1){
      this.todos.push(new TodoModel(this.todos1[j].title, this.todos1[j].user, this.todos1[j].priority));
      j = j + 1;
    }
  }

}










