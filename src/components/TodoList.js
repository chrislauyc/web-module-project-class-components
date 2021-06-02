// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import {
	Grid,Paper
} from '@material-ui/core';
class TodoList extends React.Component{
	render(){
		const {todoList} = this.props;
		return (
			<Grid container>
			{
				Object.keys(todoList).map((key)=>(
					<Grid key={key} item xs={12}>
						<Paper>
							<Todo data={todoList[key]} handleChecked={this.props.handleChecked} />
						</Paper>
					</Grid>
				))
			}
			</Grid>
		)
	};
}
export default TodoList;