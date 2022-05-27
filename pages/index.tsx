import type { NextPage } from 'next';
import TodoList from '../components/TodoList/TodoList';
import CreateButton from '../components/CreateButton';
import React from 'react';
import PageTitle from '../components/PageTitle';

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
