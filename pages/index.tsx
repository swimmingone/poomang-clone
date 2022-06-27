import type { NextPage } from 'next';
import TodoList from '../src/todo/components/templates/TodoList/TodoList';
import React, { useContext } from 'react';
import PageTitle from '../src/common/components/PageTitle';
import { useRouter } from 'next/router';
import { TodoContext } from '../src/todo/provider/TodoProvider';

const Home: NextPage = () => {
	const router = useRouter();
	const { onToggle, onDelete, onDeleteAll, filteredTodos, onChangeFilter } =
		useContext(TodoContext);

	const goCreate = () => {
		router.push('/create');
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
