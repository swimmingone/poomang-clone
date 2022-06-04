import React from 'react';
import PageTitle from '../src/common/components/PageTitle';
import CreateForm from '../src/todo/components/templates/CreateForm';

const CreateTodo = () => {
	return (
		<>
			<PageTitle title={'Create Todo'} />
			<CreateForm />
		</>
	);
};

export default CreateTodo;
