import React from 'react';
import {Grid,Checkbox,Paper} from '@material-ui/core';
import Styled from 'styled-components';

class Todo extends React.Component{
	render(){
		const {data,handleChecked} = this.props;
		return (
			<Paper>
				<Grid container alignItems='center'>
					<Grid item>
						<Checkbox name={`${data.id}`} checked={data.completed} onChange={(e)=>handleChecked(e)}/>
					</Grid>
					<Grid item>
						<StyledTask completed={data.completed}>{data.task}</StyledTask>
					</Grid>
				</Grid>
			</Paper>
		);
	};
};
export default Todo;

const StyledTask = Styled.div`
	text-decoration: ${props=>props.completed?'line-through':'none'};
`;