import React, { Component } from 'react';
import { render } from "react-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Button from "./components/Button/button";
import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

import './App.css';

const store = new TodoListModel();

class App extends Component { 
  	render() {
	    return (
	    	<div className="App">
	    		<div className="App-header" >
	    			<p className="App-title">Todo List</p>
	    		</div>
	    	  	<TodoList className="App-intro" store={store} />
	    	</div>
	    );
	    document.getElementById("root")
  	}
}
window.store = store;
export default App;