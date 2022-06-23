import React, { useEffect, useState } from 'react';
import PageTitle from '../src/common/components/PageTitle';
import usePreventLeave from '../src/utils/usePreventLeave';
import useTodoListState from '../src/todo/hooks/useTodoListState';
import { useRouter } from 'next/router';
import { Tag } from '../src/todo/types/Tag';
import { Todo } from '../src/todo/types/Todo';
import TodoForm from '../src/todo/components/templates/TodoForm';

const CreateTodo = () => {
	const { enablePrevent, disablePrevent, block } = usePreventLeave();
	const { addTodo } = useTodoListState();

	const router = useRouter();
	const initialTodo = {
		id: '',
		title: '',
		description: '',
		tags: [],
		dueDate: '',
		creationDate: '',
		editDate: '',
		doneDate: '',
		isDone: false,
	};
	const [data, setData] = useState<Todo | null>(initialTodo);
	const [tags, setTags] = useState<Tag[]>([]);

	const removeTag = (name: string) => {
		setTags(tags.filter((tag) => tag.name !== name));
	};

	const onSubmit = () => {
		if (data) {
			const newTodo = { ...data, tags: tags };
			addTodo(newTodo);
		} else {
			alert('할 일이 생성되지 않았습니다.');
		}
		router.push('/');
	};

	useEffect(() => {
		enablePrevent();
		return () => {
			disablePrevent();
		};
	}, [enablePrevent, disablePrevent]);

	useEffect(() => {
		data !== initialTodo && block();
	}, [data, initialTodo, tags, block]);

	if (!data) return null;
	return (
		<>
			<PageTitle title={'Create Todo'} />
			<TodoForm
				tags={tags}
				setTags={setTags}
				removeTag={removeTag}
				data={data}
				setData={setData}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export default CreateTodo;
