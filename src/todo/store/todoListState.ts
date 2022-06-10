import { atom, selector } from 'recoil';
import { Todo } from '../types/Todo';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const todoListState = atom<Array<Todo>>({
	key: 'todoListState',
	default: [],
	effects_UNSTABLE: [persistAtom],
});

export const selectedIdState = atom<string>({
	key: 'selectedIdState',
	default: '',
});

export const selectedTodoState = selector({
	key: 'selectedTodoState',
	get: ({ get }) => {
		const todoList = get(todoListState);
		const selectedId = get(selectedIdState);
		const selectedTodo = todoList.find((todo) => todo.id === selectedId);
		return selectedTodo ? selectedTodo : null;
	},
});

export const todoListFilterState = atom<string>({
	key: 'todoListFilterState',
	default: 'Show All',
});

export const filteredTodoListState = selector({
	key: 'filteredTodoListState',
	get: ({ get }) => {
		const filter = get(todoListFilterState);
		const list = get(todoListState);

		switch (filter) {
			case 'Show Done':
				return list.filter((item) => item.isDone);
			case 'Show Undone':
				return list.filter((item) => !item.isDone);
			default:
				return list;
		}
	},
});
