import { Todo } from '../types/Todo';
import replaceItemAtIndex from '../../utils/replaceItemAtIndex';
import removeItemAtIndex from '../../utils/removeItemAtIndex';
import newID from '../../utils/newId';
import dayjs from 'dayjs';

type TodosAction = {
	type: string;
	id?: string;
	payload?: Todo;
	value?: Todo[];
};

export default function reducer(state: Todo[], action: TodosAction): Todo[] {
	const targetIndex = state.findIndex((todo) => todo.id === action.id);
	const targetTodo = state.find((todo) => todo.id === action.id);

	switch (action.type) {
		case 'INIT_STORED':
			if (!action.value) return [];
			return action.value;

		case 'TOGGLE_DONE':
			if (!targetTodo) return state;
			return replaceItemAtIndex<Todo>(state, targetIndex, {
				...targetTodo,
				isDone: !targetTodo.isDone,
			});

		case 'CREATE_TODO':
			if (!action.payload) return state;
			return [
				...state,
				{
					id: newID(),
					title: action.payload.title,
					description: action.payload.description,
					tags: action.payload.tags,
					dueDate: action.payload.dueDate,
					creationDate: dayjs().format('YYYY/MM/DD hh:mm'),
					editDate: '',
					doneDate: '',
					isDone: false,
				},
			];
		case 'EDIT_TODO':
			console.log(targetIndex, action.payload);
			if (!targetTodo || !action.payload) return state;
			console.log(action.payload);
			return replaceItemAtIndex<Todo>(state, targetIndex, {
				...action.payload,
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
