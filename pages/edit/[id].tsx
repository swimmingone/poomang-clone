import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PageTitle from '../../src/common/components/PageTitle';
import useSelectedTodoState from '../../src/todo/hooks/useSelectedTodoState';
import useTodoListState from '../../src/todo/hooks/useTodoListState';
import usePreventLeave from '../../src/common/hooks/usePreventLeave';
import { Tag } from '../../src/todo/types/Tag';
import TodoForm from '../../src/todo/components/templates/TodoForm';

const EditTodo = () => {
	const { enablePrevent, disablePrevent, block } = usePreventLeave();
	const { editTodo } = useTodoListState();
	const { getTodoById, selectedTodo } = useSelectedTodoState();
	const router = useRouter();
	const id = router.query.id;

	const [data, setData] = useState(selectedTodo);
	const [tags, setTags] = useState<Tag[]>([]);

	const removeTag = (name: string) => {
		setTags(tags.filter((tag) => tag.name !== name));
	};

	const onSubmit = () => {
		if (data) {
			const newTodo = { ...data, tags: tags };
			editTodo(newTodo);
		} else {
			alert('할 일이 수정되지 않았습니다.');
		}
		router.push('/');
	};

	useEffect(() => {
		if (typeof id === 'string') {
			getTodoById(id);
		}
	}, [getTodoById, id]);

	useEffect(() => {
		if (!selectedTodo) {
			setData({
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
		} else {
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
