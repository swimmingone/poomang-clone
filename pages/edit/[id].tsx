import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PageTitle from '../../src/common/components/PageTitle';
import EditForm from '../../src/todo/components/templates/EditForm';
import useSelectedTodoState from '../../src/todo/hooks/useSelectedTodoState';
import useTodoListState from '../../src/todo/hooks/useTodoListState';
import usePreventLeave from '../../src/utils/usePreventLeave';
import { Tag } from '../../src/todo/types/Tag';

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

	const onClickSubmit = () => {
		if (data) {
			const newTodo = { ...data, tags: tags };
			editTodo(newTodo);
		} else {
			alert('수정되지 않았습니다.');
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
			<EditForm
				tags={tags}
				setTags={setTags}
				removeTag={removeTag}
				data={data}
				setData={setData}
				onClickSubmit={onClickSubmit}
			/>
		</>
	);
};

export default EditTodo;
