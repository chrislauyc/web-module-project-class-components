import React from 'react';
import {TextField,Button,Grid,Paper} from '@material-ui/core';
class TodoForm extends React.Component{
	constructor(){
		super();
		this.state = {task:''};
	}
	handleTextChange = (e) => {
		const {value} = e.target;
		this.setState({task:value});
	};
	handleSubmit = (e) => {
		e.preventDefault();
	  this.props.addTask(this.state.task);
	  this.setState({task:''});
	};
	render(){
		const {handleTextChange,handleSubmit} = this;
		const {task} = this.state;
		const {clearCompleted} = this.props;
		return(
			<form onSubmit={handleSubmit}>
				<Paper>
					<Grid container alignItems='center' direction='row' justify='space-around'>
							<Grid item>
									<TextField variant='filled' label='Task' value={task} onChange={handleTextChange}/>
							</Grid>
							<Grid item>
									<Button type='submit'>Add Task</Button>	
							</Grid>
							<Grid item>
									<Button type='button' onClick={clearCompleted}>Clear Completed</Button>
							</Grid>
					</Grid>
				</Paper>
			</form>	
		);
	};
}
export default TodoForm;