import { atom } from 'recoil';

export const todoListState = atom({
	key: 'todoListState',
	default: [
		{
			id: '1',
			title: 'made it a adsflkja;sdlfkjas; dofiaweofi',
			description: 'string',
			tags: [
				{ name: '뭐지', color: 'error' },
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
