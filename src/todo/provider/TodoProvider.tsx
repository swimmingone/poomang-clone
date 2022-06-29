import React, {
	createContext,
	ReactChild,
	ReactChildren,
	useCallback,
	useEffect,
	useReducer,
	useState,
} from 'react';
import TodoReducer from './TodoReducer';
import { Todo } from '../types/Todo';

const initialState: Todo[] = [];

interface TodoContextType {
	todos: Todo[];
	filter: string;
	filteredTodos: Todo[];
	onChangeFilter: (filter: string) => void;
	getTodoById: (id: string) => Todo | null;
	onToggle: (id: string) => void;
	onCreate: (data: Todo) => void;
	onEdit: (data: Todo) => void;
	onDelete: (id: string) => void;
	onDeleteAll: () => void;
}

export const TodoContext = createContext<TodoContextType>({
	todos: [],
	filter: 'Show All',
	filteredTodos: [],
	onChangeFilter: () => {},
	getTodoById: () => null,
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
	const [filter, setFilter] = useState('Show All');
	const [filteredTodos, setFilteredTodos] = useState(state);

	const filterTodo = useCallback((filter: string, state: Todo[]): Todo[] => {
		switch (filter) {
			case 'Show Done':
				return state.filter((item) => item.isDone);
			case 'Show Undone':
				return state.filter((item) => !item.isDone);
			default:
				return state;
		}
	}, []);

	const onChangeFilter = useCallback(
		(filter: string) => {
			setFilter(filter);
		},
		[setFilter],
	);

	const getTodoById = useCallback(
		(id: string) => {
			return state.find((todo) => todo.id === id) ?? null;
		},
		[state],
	);

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
			id: data.id,
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
		const loadedTodos = localStorage.getItem('state');
		if (loadedTodos !== null) {
			dispatch({
				type: 'INIT_STORED',
				value: JSON.parse(loadedTodos),
			});
		}
	}, []);
	useEffect(() => {
		if (state !== initialState) {
			localStorage.setItem('state', JSON.stringify(state));
		}
	}, [state]);

	useEffect(() => {
		setFilteredTodos(filterTodo(filter, state));
	}, [state, filter, filterTodo]);

	return (
		<TodoContext.Provider
			value={{
				todos: state,
				filter,
				filteredTodos,
				onChangeFilter,
				getTodoById,
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
