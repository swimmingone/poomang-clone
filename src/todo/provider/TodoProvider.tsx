import React, {
	createContext,
	ReactChild,
	ReactChildren,
	useCallback,
	useEffect,
	useReducer,
} from 'react';
import { Todo } from '../types/Todo';
import dayjs from 'dayjs';
import newID from '../../utils/newId';
import removeItemAtIndex from '../../utils/removeItemAtIndex';
import replaceItemAtIndex from '../../utils/replaceItemAtIndex';

type UseTodosAction = {
	type: string;
	id?: string;
	payload?: Todo;
	value?: Todo[];
};

const initialState: Todo[] = [];

function reducer(state: Todo[], action: UseTodosAction): Todo[] {
	const { type, id, payload, value } = action;
	const targetIndex = state.findIndex((todo) => todo.id === id);
	const targetTodo = state.find((todo) => todo.id === id);

	switch (type) {
		case 'INIT_STORED':
			if (!value) return [];
			return value;

		case 'TOGGLE_DONE':
			if (!targetTodo) return state;
			return replaceItemAtIndex<Todo>(state, targetIndex, {
				...targetTodo,
				isDone: !targetTodo.isDone,
			});

		case 'CREATE_TODO':
			if (!payload) return state;
			console.log(payload);
			return [
				...state,
				{
					id: newID(),
					title: payload.title,
					description: payload.description,
					tags: payload.tags,
					dueDate: payload.dueDate,
					creationDate: dayjs().format('YYYY/MM/DD hh:mm'),
					editDate: '',
					doneDate: '',
					isDone: false,
				},
			];
		case 'EDIT_TODO':
			if (!targetTodo || !payload) return state;
			return replaceItemAtIndex<Todo>(state, targetIndex, {
				...payload,
				editDate: dayjs().format('YYYY/MM/DD hh:mm'),
			});
		case 'DELETE_TODO':
			return removeItemAtIndex<Todo>(state, targetIndex);
		case 'DELETE_ALL_DONE':
			return state.filter((todo) => !todo.isDone);
		default:
			return state;
	}
}

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
	const [state, dispatch] = useReducer(reducer, initialState);

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
