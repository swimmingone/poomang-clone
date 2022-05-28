import React from 'react';
import TodoItem from './TodoItem';
import useTodoListState from '../../store/useTodoListState';

const TodoList = () => {
	const { todos } = useTodoListState();

	const todoList = todos?.map((todo) => (
		<TodoItem
			key={todo.id}
			id={todo.id}
			title={todo.title}
			isDone={todo.isDone}
			dueDate={todo.dueDate}
			tags={todo.tags}
		/>
	));
	return <div className={'w-full'}>{todoList}</div>;
};

export default TodoList;
