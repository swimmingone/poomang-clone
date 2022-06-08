import React, { useEffect } from 'react';
import PageTitle from '../src/common/components/PageTitle';
import CreateForm from '../src/todo/components/templates/CreateForm';
import useUnloadAlert from '../src/utils/useUnloadAlert';
import useTodoListState from '../src/todo/hooks/useTodoListState';

const CreateTodo = () => {
	const { enablePrevent, disablePrevent } = useUnloadAlert();
	const { addTodo } = useTodoListState();

	useEffect(() => {
		enablePrevent();
		return () => {
			disablePrevent();
		};
	}, [enablePrevent, disablePrevent]);

	return (
		<>
			<PageTitle title={'Create Todo'} />
			<CreateForm addTodo={addTodo} />
		</>
	);
};

export default CreateTodo;
