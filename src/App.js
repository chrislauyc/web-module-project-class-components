import React from 'react';
import TodoForm from './components/TodoForm';
const initialTodo = {
	task:'',
	id:Date.now(),
	completed:false
};

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
	constructor(){
	  this.todoList = {
			[initialTodo.id]:initialTodo
		  };
	};

	handleChecked = (e) => {
	  const {name,checked} = e.target;
	  this.todoList[name].completed = checked;
	};
	addTask = (task) =>{
		const id = Date.now();
		this.todoList[id] = {
			task,
			id:Date.now(),
			completed:false
		};
	};
	render() {
		return (
		  <div>
			<h2>Welcome to your Todo App!</h2>
			<TodoForm addTask={addTask}/>
		  </div>
		);
	}
}

export default App;
