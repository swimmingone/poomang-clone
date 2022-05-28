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
		return todoList.find((todo) => todo.id === selectedId);
	},
});
