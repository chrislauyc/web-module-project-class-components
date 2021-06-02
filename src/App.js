import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {Typography} from '@material-ui/core';

// const initialTodo = {
// 	task:'',
// 	id:Date.now(),
// 	completed:false
// };

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
	constructor(){
		super();
		this.state = {
		todoList:{}
		};
	};

	handleChecked = (e) => {
	  const {name,checked} = e.target;
	  const {todoList} = this.state;
	  this.setState({
		todoList:{
			...todoList,[name]:{...todoList[name],completed:checked}
		}
	  });
	};
	addTask = (task) =>{
		const id = Date.now();
		this.setState({
			todoList:{...this.state.todoList,[id]:{
				task:task,
				id:id,
				completed:false
			}}
		});
	};
	clearCompleted = () =>{
		const {todoList} = this.state;
		const updatedTodoList = Object.keys(todoList)
		.filter(key=>!(todoList[key].completed))
		.reduce((acc,key)=>{
			acc[key]=todoList[key];
			return acc;
		},{});
		this.setState({
			todoList:updatedTodoList
		});
	};
	render() {
		const {clearCompleted,handleChecked,addTask} = this;
		const {todoList} = this.state;
		return (
		  <div>
			<Typography variant='h3' component='h1' color='textSecondary' gutterBottom>Welcome to your Todo App!</Typography>
			<TodoList todoList={todoList} handleChecked={handleChecked}/>
			<TodoForm addTask={addTask} clearCompleted={clearCompleted}/>
		  </div>
		);
	}
}

export default App;
