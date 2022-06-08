import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PageTitle from '../../src/common/components/PageTitle';
import useSelectedTodoState from '../../src/todo/hooks/useSelectedTodoState';
import EditForm from '../../src/todo/components/templates/EditForm';
import useTodoListState from '../../src/todo/hooks/useTodoListState';
import useUnloadAlert from '../../src/utils/useUnloadAlert';

const EditTodo = () => {
	const { enablePrevent, disablePrevent } = useUnloadAlert();
	const router = useRouter();
	const id = router.query.id;

	const { editTodo } = useTodoListState();
	const { getTodoById, selectedTodo } = useSelectedTodoState();

	useEffect(() => {
		if (typeof id === 'string') {
			getTodoById(id);
		}
	}, [getTodoById, id]);

	useEffect(() => {
		enablePrevent();
		return () => {
			disablePrevent();
		};
	}, [enablePrevent, disablePrevent]);

	if (!selectedTodo) return null;
	return (
		<>
			<PageTitle title={'Todo Detail'} />
			<EditForm selectedTodo={selectedTodo} editTodo={editTodo} />
		</>
	);
};

export default EditTodo;
