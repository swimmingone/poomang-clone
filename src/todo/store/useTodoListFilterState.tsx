import { useRecoilState, useRecoilValue } from 'recoil';
import { filteredTodoListState, todoListFilterState } from './todoListState';

const useTodoListFilterState = () => {
	const filteredTodos = useRecoilValue(filteredTodoListState);
	const [filter, setFilter] = useRecoilState(todoListFilterState);

	return {
		filter,
		setFilter,
		filteredTodos,
	};
};

export default useTodoListFilterState;
