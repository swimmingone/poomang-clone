import { useRecoilState } from 'recoil';
import { todoListState } from './todoListState';
import { Todo } from '../types/Todo';

const useTodoListState = () => {
	const [todos, setTodos] = useRecoilState(todoListState);

	const toggleDone = (id: string) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const item = todos.find((todo) => todo.id == id);
		if (!item) return;
		const newList = replaceItemAtIndex(todos, index, {
			...item,
			isDone: !item.isDone,
		});

		setTodos(newList);
	};

	const addTodo = (data: Todo) => {
		const newList = [
			...todos,
			{
				id: newID(),
				title: data.title,
				description: data.description,
				tags: data.tags,
				dueDate: data.dueDate,
				creationDate: data.creationDate,
				editDate: '',
				doneDate: '',
				isDone: false,
			},
		];
		setTodos(newList);
	};

	const editTodo = (data: Todo) => {
		const index = todos.findIndex((todo) => todo.id === data.id);
		const newList = replaceItemAtIndex(todos, index, data);
		setTodos(newList);
	};

	const deleteTodo = (id: string) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const newList = removeItemAtIndex(todos, index);
		setTodos(newList);
	};

	const deleteAllDone = () => {
		const newList = todos.filter((todo) => !todo.isDone);
		setTodos(newList);
	};

	return {
		todos,
		toggleDone,
		setTodos,
		addTodo,
		editTodo,
		deleteTodo,
		deleteAllDone,
	};
};

function newID() {
	return Math.random().toString(36).substring(2, 16);
}

function replaceItemAtIndex(arr: Todo[], index: number, newValue: Todo) {
	return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr: Todo[], index: number) {
	return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default useTodoListState;
