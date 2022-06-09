import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListFilterState } from '../store/todoListState';
import { useCallback } from 'react';

const useTodoListFilterState = () => {
	const filteredTodos = useRecoilValue(filteredTodoListState);
	const [filter, setFilter] = useRecoilState(todoListFilterState);

	const changeFilter = useCallback(
		(filter: string) => {
			setFilter(filter);
		},
		[setFilter],
	);

	return {
		filter,
		changeFilter,
		filteredTodos,
	};
};

export default useTodoListFilterState;
