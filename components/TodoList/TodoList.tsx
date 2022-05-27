import React from 'react';
import TodoItem from './TodoItem';
import { Tag, Todo } from '../../types/Todo';
import CreateButton from '../CreateButton';

interface Props {}

const TodoList = ({}: Props) => {
	let todos: Array<Todo> = [
		{
			id: '1',
			title: 'made it a adsflkja;sdlfkjas;dofiaweofi',
			description: 'string',
			tags: [{ name: '뭐지', color: 'primary' }],
			dueDate: 'string',
			creationDate: 'string',
			editDate: 'string',
			doneDate: 'string',
			isDone: false,
		},
		{
			id: '2',
			title: 'something',
			description: 'string',
			tags: [{ name: 'string', color: 'blue' }],
			dueDate: 'string',
			creationDate: 'string',
			editDate: 'string',
			doneDate: 'string',
			isDone: true,
		},
	];

	const todoList = todos?.map((todo) => <TodoItem key={todo.title} todo={todo} />);
	return (
		<div className={'m-16 w-3/4 flex-col bg-white'}>
			<div className={'bg-blue-100 p-4 text-center text-2xl text-blue-600'}>Todo-list!</div>
			{todoList}
			<CreateButton />
		</div>
	);
};

export default TodoList;
