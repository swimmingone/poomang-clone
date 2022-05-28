import React from 'react';
import TodoItem from './TodoItem';
import { todoListState } from '../../store/TodoListState';
import { useRecoilValue } from 'recoil';

interface Props {}

const TodoList = ({}: Props) => {
	const todos = useRecoilValue(todoListState);

	const todoList = todos?.map((todo) => <TodoItem key={todo.title} todo={todo} />);
	return <div className={'w-full'}>{todoList}</div>;
};

export default TodoList;
