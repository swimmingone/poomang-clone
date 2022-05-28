import { useRecoilState } from 'recoil';
import { todoListState } from './todoListState';
import { Todo } from '../types/Todo';

const useTodoListState = () => {
	const [todos, setTodos] = useRecoilState(todoListState);

	const addTodo = (data: Todo) => {
		const newList = [
			...todos,
			{
				id: newID(),
				title: data.title,
				description: data.description,
				tags: [],
				dueDate: data.dueDate,
				creationDate: 'string',
				editDate: 'string',
				doneDate: 'string',
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

	return {
		todos,
		setTodos,
		addTodo,
		editTodo,
		deleteTodo,
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
