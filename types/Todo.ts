import { Tag } from './Tag';

export type Todo = {
	id: string;
	title: string;
	description: string;
	tags: Array<Tag>;
	dueDate: string;
	creationDate: string;
	editDate: string;
	doneDate: string;
	isDone: boolean;
};
