import React from "react";
import { render } from "react-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import App from './App';



import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";


render(
  <div>
  	<App />
  </div>,
  document.getElementById("root")
);


// playing around in the console


