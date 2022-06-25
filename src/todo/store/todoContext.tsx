import React from 'react';

const TodoContext = React.createContext({
	id: '',
	title: '',
	description: '',
	tags: [],
	dueDate: '',
	creationDate: '',
	editDate: '',
	doneDate: '',
	isDone: false,
});

export default TodoContext;
