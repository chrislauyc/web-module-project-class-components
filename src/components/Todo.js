import React from 'react';

class Todo extends React.Component{
	constructor(){
		super();
	};
	render(){
		const {data,handleChecked} = this.props;
		return (
			<div>
				<input type='checkbox' checked={data.completed} onCheck={handleChecked}/>
				<div>{data.task}</div>
			</div>
		);
	};
};