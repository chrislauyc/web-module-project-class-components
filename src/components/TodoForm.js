import React from 'react';
class TodoForm extends React.Component{
	constructor(){
		super();
		this.task = '';
	}
	handleTextChange = (e) => {
		const {value} = e.target;
		this.task = value;
	};
	handleSubmit = (e) => {
	  this.props.addTask(this.task);
	  this.task = '';
	};
	render(){
		return(
			<form onSubmit={handleSubmit}>
				<label>
					Task
					<input type='text' value={this.task}/>
				</label>
				<button type='submit'>Add Task</button>
			</form>	
		);
	};
}