import { Todo } from '../../src/todo/types/Todo';
import { Tag } from '../../src/todo/types/Tag';
import TodoForm from '../../src/todo/components/templates/TodoForm';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import PageTitle from '../../src/common/components/PageTitle';
import usePreventLeave from '../../src/common/hooks/usePreventLeave';
import { TodoContext } from '../../src/todo/provider/TodoProvider';

const CreateTodo = () => {
	const { enablePrevent, disablePrevent, block } = usePreventLeave();
	const { onCreate } = useContext(TodoContext);

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
			onCreate(newTodo);
		} else {
			alert('할 일이 생성되지 않았습니다.');
		}
		router.push('/tour');
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
