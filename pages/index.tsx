import type { NextPage } from 'next';
import TodoList from '../src/todo/components/templates/TodoList/TodoList';
import CreateButton from '../src/todo/components/molecules/CreateButton';
import React from 'react';
import PageTitle from '../src/common/components/PageTitle';

const Home: NextPage = () => {
	return (
		<>
			<PageTitle title={'Todo-list'} />
			<TodoList />
			<CreateButton />
		</>
	);
};

export default Home;
