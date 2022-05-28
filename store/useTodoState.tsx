import { useRecoilState } from 'recoil';
import { todoListState } from './TodoListState';
import { useCallback } from 'react';
import { Todo } from '../types/Todo';

const useTodoState = () => {
	const [todos, setTodos] = useRecoilState(todoListState);

	const toggleDone = (todo: Todo) => {
		todo.isDone = !todo.isDone;
	};

	const onToggleDone = useCallback((todo) => {
		toggleDone(todo);
	}, []);

	const getTodoById = useCallback(
		(id: string) => {
			return todos.find((todo) => todo.id === id);
		},
		[todos],
	);

	const newID = function () {
		return Math.random().toString(36).substring(2, 16);
	};
	const addTodo = (data: Todo) => {
		setTodos((oldList) => [
			...oldList,
			{
				id: newID(),
				title: data.title,
				description: data.description,
				tags: [],
				dueDate: data.dueDate,
				creationDate: 'string',
				editDate: 'string',
				doneDate: 'string',
				isDone: false,
			},
		]);
	};

	return {
		todos,
		setTodos,
		addTodo,
		onToggleDone,
		getTodoById,
	};
};

export default useTodoState;
