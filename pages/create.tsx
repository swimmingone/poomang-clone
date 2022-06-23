import React, { useEffect, useState } from 'react';
import PageTitle from '../src/common/components/PageTitle';
import CreateForm from '../src/todo/components/templates/CreateForm';
import usePreventLeave from '../src/utils/usePreventLeave';
import useTodoListState from '../src/todo/hooks/useTodoListState';
import { useRouter } from 'next/router';
import useInputs from '../src/utils/useInputs';
import { Tag } from '../src/todo/types/Tag';
import { Todo } from '../src/todo/types/Todo';

const CreateTodo = () => {
	const { enablePrevent, disablePrevent, block } = usePreventLeave();
	const { addTodo } = useTodoListState();

	const router = useRouter();
	const [data, onChangeData] = useInputs<Todo>({
		id: '',
		title: '',
		description: '',
		tags: [],
		dueDate: '',
		creationDate: '',
		editDate: '',
		doneDate: '',
		isDone: false,
	});
	const [tags, setTags] = useState<Tag[]>([]);

	const removeTag = (name: string) => {
		setTags(tags.filter((tag) => tag.name !== name));
	};

	const onClickSubmit = () => {
		const newTodo = { ...data, tags: tags };
		addTodo(newTodo);
		router.push('/');
	};

	useEffect(() => {
		enablePrevent();
		return () => {
			disablePrevent();
		};
	}, [enablePrevent, disablePrevent]);

	useEffect(() => {
		(data.title || data.description || data.dueDate || tags.length) && block();
	}, [data, tags, block]);

	return (
		<>
			<PageTitle title={'Create Todo'} />
			<CreateForm
				tags={tags}
				setTags={setTags}
				removeTag={removeTag}
				data={data}
				onChangeData={onChangeData}
				onClickSubmit={onClickSubmit}
			/>
		</>
	);
};

export default CreateTodo;
