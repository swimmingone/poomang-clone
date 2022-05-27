import React from 'react';
import PageTitle from '../components/PageTitle';
import CreateForm from '../components/CreateForm/CreateForm';

const CreateTodo = () => {
	return (
		<>
			<PageTitle title={'Create Todo'} />
			<CreateForm />
		</>
	);
};

export default CreateTodo;
