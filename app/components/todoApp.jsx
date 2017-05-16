var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			todos:[
				{
					id: 1,
					text: 'Walk le Dog'
				},
				{
					id: 2,
					text: 'Clean le Yard'
				},
				{
					id: 3,
					text: 'Some rogue third thing'
				},
				{
					id: 4,
					text: 'give up on life'
				}
			]
		};
	},
	render: function(){
		var {todos} = this.state;
		return(
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}
});

module.exports = TodoApp;