import { atom, selector } from 'recoil';
import { Todo } from '../types/Todo';

export const todoListState = atom<Array<Todo>>({
	key: 'todoListState',
	default: [
		{
			id: '1',
			title: 'made it a adsflkja;sdlfkjas; dofiaweofi',
			description: 'string',
			tags: [
				{ name: '뭐지', color: 'primary' },
				{ name: '뭘까', color: 'accent' },
			],
			dueDate: 'string',
			creationDate: 'string',
			editDate: 'string',
			doneDate: 'string',
			isDone: false,
		},
		{
			id: '2',
			title: 'something',
			description: 'string',
			tags: [{ name: '뭘까', color: 'accent' }],
			dueDate: 'string',
			creationDate: 'string',
			editDate: 'string',
			doneDate: 'string',
			isDone: true,
		},
	],
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
