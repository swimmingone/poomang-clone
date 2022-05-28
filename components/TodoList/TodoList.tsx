import React from 'react';
import TodoItem from './TodoItem';
import useTodoState from '../../store/useTodoState';

const TodoList = () => {
	const { todos } = useTodoState();

	const todoList = todos?.map((todo) => (
		<TodoItem
			key={todo.id}
			id={todo.id}
			title={todo.title}
			isDone={todo.isDone}
			tags={todo.tags}
		/>
	));
	return <div className={'w-full'}>{todoList}</div>;
};

export default TodoList;
