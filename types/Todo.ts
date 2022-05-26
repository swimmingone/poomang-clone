export type Todo = {
	id: string;
	title: string;
	description: string;
	tag: Tag;
	dueDate: string;
	creationDate: string;
	editDate: string;
	doneDate: string;
	isDone: boolean;
};

export type Tag = {
	name: string;
	textColor: string;
	backgroundColor: string;
};
