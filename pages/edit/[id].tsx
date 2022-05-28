import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PageTitle from '../../components/PageTitle';
import useSelectedTodoState from '../../store/useSelectedTodoState';

const EditTodo = () => {
	const router = useRouter();
	const id = router.query.id;

	const { getTodoById, selectedTodo } = useSelectedTodoState();

	useEffect(() => {
		if (typeof id === 'string') {
			getTodoById(id);
		}
	}, [getTodoById, id]);

	if (!selectedTodo) return null;
	return (
		<>
			<PageTitle title={'Todo Detail'} />
			<h1>{selectedTodo.title}</h1>
		</>
	);
};

export default EditTodo;
