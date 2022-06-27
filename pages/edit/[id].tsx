import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PageTitle from '../../src/common/components/PageTitle';
import usePreventLeave from '../../src/common/hooks/usePreventLeave';
import { Tag } from '../../src/todo/types/Tag';
import TodoForm from '../../src/todo/components/templates/TodoForm';
import { TodoContext } from '../../src/todo/provider/TodoProvider';
import { Todo } from '../../src/todo/types/Todo';

const EditTodo = () => {
	const { enablePrevent, disablePrevent, block } = usePreventLeave();
	const { onEdit, getTodoById } = useContext(TodoContext);
	const router = useRouter();
	const id = router.query.id;
	const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
	const [data, setData] = useState<Todo | null>(null);
	const [tags, setTags] = useState<Tag[]>([]);

	const removeTag = (name: string) => {
		setTags(tags.filter((tag) => tag.name !== name));
	};

	const onSubmit = () => {
		if (data) {
			const newTodo = { ...data, tags: tags };
			onEdit(newTodo);
		} else {
			alert('할 일이 수정되지 않았습니다.');
		}
		router.push('/');
	};

	useEffect(() => {
		if (typeof id === 'string') {
			setSelectedTodo(getTodoById(id));
		}
	}, [getTodoById, id]);

	useEffect(() => {
		if (selectedTodo) {
			setData(selectedTodo);
			setTags(selectedTodo.tags);
		}
	}, [selectedTodo]);

	useEffect(() => {
		enablePrevent();
		return () => {
			disablePrevent();
		};
	}, [enablePrevent, disablePrevent]);

	useEffect(() => {
		data !== selectedTodo && block();
	}, [data, selectedTodo, tags, block]);

	if (!data) return null;
	return (
		<>
			<PageTitle title={'Todo Detail'} />
			<div className={'flex w-full justify-end gap-4 px-4 py-2'}>
				<div className={'label-text'}>생성일 : {data.creationDate}</div>
				<div className={'label-text'}>수정일 : {data.editDate}</div>
			</div>
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

export default EditTodo;
