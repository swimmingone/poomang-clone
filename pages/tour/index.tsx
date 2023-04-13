import { useRouter } from 'next/router';
import PageTitle from '../../src/common/components/PageTitle';
import { TodoContext } from '../../src/todo/provider/TodoProvider';
import { NextPage } from 'next';
import { useContext } from 'react';
import TodoList from '../../src/todo/components/templates/TodoList/TodoList';

const Home: NextPage = () => {
	const router = useRouter();
	const { onToggle, onDelete, onDeleteAll, filteredTodos, onChangeFilter } =
		useContext(TodoContext);

	const goCreate = () => {
		router.push('/tour/create');
	};

	return (
		<>
			<PageTitle title={'Todo-list'} />
			<TodoList
				changeFilter={onChangeFilter}
				filteredTodos={filteredTodos}
				toggleDone={onToggle}
				deleteTodo={onDelete}
				deleteAllDone={onDeleteAll}
				goCreate={goCreate}
			/>
		</>
	);
};

export default Home;
