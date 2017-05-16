var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showCompleted: false,
			searchText: '',
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
	handleAddTodo: function(text){
		alert(text);
	},
	handleSearch: function(showCompleted, searchText){
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function(){
		var {todos} = this.state;
		return(
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		)
	}
});

module.exports = TodoApp;