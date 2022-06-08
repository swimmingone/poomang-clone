import type { NextPage } from 'next';
import TodoList from '../src/todo/components/templates/TodoList/TodoList';
import CreateButton from '../src/todo/components/molecules/CreateButton';
import React from 'react';
import PageTitle from '../src/common/components/PageTitle';
import useTodoListFilterState from '../src/todo/hooks/useTodoListFilterState';

const Home: NextPage = () => {
	const { filteredTodos, setFilter } = useTodoListFilterState();

	return (
		<>
			<PageTitle title={'Todo-list'} />
			<TodoList filteredTodos={filteredTodos} setFilter={setFilter} />
			<CreateButton />
		</>
	);
};

export default Home;
