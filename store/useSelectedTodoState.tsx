import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedIdState, selectedTodoState } from './todoListState';
import { useCallback } from 'react';
import { Todo } from '../types/Todo';

const useTodoState = () => {
	const selectedTodo = useRecoilValue(selectedTodoState);
	const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

	const toggleDone = (todo: Todo) => {
		todo.isDone = !todo.isDone;
	};

	const onToggleDone = useCallback((todo: Todo) => {
		toggleDone(todo);
	}, []);

	const getTodoById = useCallback(
		(id: string) => {
			setSelectedId(id);
		},
		[setSelectedId],
	);

	return {
		selectedId,
		setSelectedId,
		selectedTodo,
		onToggleDone,
		getTodoById,
	};
};

export default useTodoState;
