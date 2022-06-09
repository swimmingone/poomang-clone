import type { NextPage } from 'next';
import TodoList from '../src/todo/components/templates/TodoList/TodoList';
import React from 'react';
import PageTitle from '../src/common/components/PageTitle';
import useTodoListFilterState from '../src/todo/hooks/useTodoListFilterState';
import useTodoListState from '../src/todo/hooks/useTodoListState';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
	const router = useRouter();
	const { filteredTodos, changeFilter } = useTodoListFilterState();
	const { toggleDone, deleteTodo, deleteAllDone } = useTodoListState();

	const goCreate = () => {
		router.push('/create');
	};

	return (
		<>
			<PageTitle title={'Todo-list'} />
			<TodoList
				changeFilter={changeFilter}
				filteredTodos={filteredTodos}
				toggleDone={toggleDone}
				deleteTodo={deleteTodo}
				deleteAllDone={deleteAllDone}
				goCreate={goCreate}
			/>
		</>
	);
};

export default Home;
