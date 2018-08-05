import { observable } from "mobx";

export default class TodoModel {
  id = Math.random();
  @observable title;  
  @observable user;
  @observable priority;
  @observable finished = false;

  constructor(title, user, priority) {
    this.title = title;
    this.user = user;
    this.priority = priority;
  }

}
