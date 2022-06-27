import React, {
	createContext,
	ReactChild,
	ReactChildren,
	useCallback,
	useEffect,
	useReducer,
} from 'react';
import TodoReducer from './TodoReducer';
import { Todo } from '../types/Todo';

const initialState: Todo[] = [];

interface TodoContextType {
	todos: Todo[];
	selectedTodo?: Todo;
	onToggle: (id: string) => void;
	onCreate: (data: Todo) => void;
	onEdit: (data: Todo) => void;
	onDelete: (id: string) => void;
	onDeleteAll: () => void;
}

export const TodoContext = createContext<TodoContextType>({
	todos: [],
	onToggle: () => {},
	onCreate: () => {},
	onEdit: () => {},
	onDelete: () => {},
	onDeleteAll: () => {},
});

interface Prop {
	children: ReactChild | ReactChildren;
}

const TodoProvider = ({ children }: Prop) => {
	const [state, dispatch] = useReducer(TodoReducer, initialState);

	const onToggle = useCallback((id: string) => {
		dispatch({
			type: 'TOGGLE_DONE',
			id,
		});
	}, []);

	const onCreate = useCallback((data: Todo) => {
		dispatch({
			type: 'CREATE_TODO',
			payload: data,
		});
	}, []);

	const onEdit = useCallback((data: Todo) => {
		dispatch({
			type: 'EDIT_TODO',
			payload: data,
		});
	}, []);

	const onDelete = useCallback((id: string) => {
		dispatch({
			type: 'DELETE_TODO',
			id,
		});
	}, []);

	const onDeleteAll = useCallback(() => {
		dispatch({
			type: 'DELETE_ALL_DONE',
		});
	}, []);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('state') ?? '')) {
			dispatch({
				type: 'INIT_STORED',
				value: JSON.parse(localStorage.getItem('state') ?? ''),
			});
		}
	}, []);
	useEffect(() => {
		if (state !== initialState) {
			localStorage.setItem('state', JSON.stringify(state));
		}
	}, [state]);

	return (
		<TodoContext.Provider
			value={{
				todos: state,
				onToggle,
				onCreate,
				onEdit,
				onDelete,
				onDeleteAll,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
