import type { NextPage } from 'next';
import TodoList from '../components/TodoList/TodoList';
import CreateButton from '../components/CreateButton';
import React from 'react';

const Home: NextPage = () => {
	return (
		<div>
			<TodoList />
			<CreateButton />
		</div>
	);
};

export default Home;
