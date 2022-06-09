import type { NextPage } from 'next';
import TodoList from '../src/todo/components/templates/TodoList/TodoList';
import CreateButton from '../src/todo/components/molecules/CreateButton';
import React from 'react';
import PageTitle from '../src/common/components/PageTitle';
import useTodoListFilterState from '../src/todo/hooks/useTodoListFilterState';
import useTodoListState from '../src/todo/hooks/useTodoListState';

const Home: NextPage = () => {
	const { filteredTodos, setFilter } = useTodoListFilterState();
	const { toggleDone, deleteTodo, deleteAllDone } = useTodoListState();

	return (
		<>
			<PageTitle title={'Todo-list'} />
			<TodoList
				setFilter={setFilter}
				filteredTodos={filteredTodos}
				toggleDone={toggleDone}
				deleteTodo={deleteTodo}
				deleteAllDone={deleteAllDone}
			/>
			<CreateButton />
		</>
	);
};

export default Home;
