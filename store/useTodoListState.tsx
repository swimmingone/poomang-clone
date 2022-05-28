import { useRecoilState } from 'recoil';
import { todoListState } from './todoListState';
import { Todo } from '../types/Todo';

const useTodoListState = () => {
	const [todos, setTodos] = useRecoilState(todoListState);

	const newID = function () {
		return Math.random().toString(36).substring(2, 16);
	};
	const addTodo = (data: Todo) => {
		setTodos((oldList) => [
			...oldList,
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
		]);
	};

	const deleteTodo = (id: string) => {
		console.log(id);
		setTodos((oldList) => oldList.filter((todo) => todo.id != id));
	};

	return {
		todos,
		setTodos,
		addTodo,
		deleteTodo,
	};
};

export default useTodoListState;
