import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedIdState, selectedTodoState } from '../store/todoListState';
import { useCallback } from 'react';

const useSelectedTodoState = () => {
	const selectedTodo = useRecoilValue(selectedTodoState);
	const [selectedId, setSelectedId] = useRecoilState(selectedIdState);

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
		getTodoById,
	};
};

export default useSelectedTodoState;
