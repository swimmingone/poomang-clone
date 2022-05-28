import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormItem from './CreateForm/FormItem';
import useTodoListState from '../store/useTodoListState';
import SubmitButton from './SubmitButton';
import { Todo } from '../types/Todo';

interface Prop {
	selectedTodo: Todo;
}

const EditForm = ({ selectedTodo }: Prop) => {
	const router = useRouter();
	const { editTodo } = useTodoListState();

	const [data, setData] = useState(selectedTodo);

	const onClickSubmit = () => {
		editTodo(data);
		router.push('/');
	};

	useEffect(() => {
		if (!selectedTodo) return;
		setData(selectedTodo);
	}, [selectedTodo]);

	return (
		<div className={'box-border flex w-full flex-col items-center justify-between gap-4 p-4'}>
			<FormItem label={'할 일'}>
				<input
					name={'title'}
					type={'text'}
					className="input input-bordered input-sm"
					value={data.title}
					onChange={(e) => setData({ ...data, title: e.target.value })}
				/>
			</FormItem>
			<FormItem label={'상세설명'}>
				<textarea
					name={'description'}
					rows={4}
					className="textarea textarea-bordered w-full"
					value={data.description}
					onChange={(e) => setData({ ...data, description: e.target.value })}
				/>
			</FormItem>
			<FormItem label={'마감목표일'}>
				<input
					name={'dueDate'}
					type={'date'}
					className="input input-bordered input-sm w-full"
					value={data.dueDate}
					onChange={(e) => setData({ ...data, dueDate: e.target.value })}
				/>
			</FormItem>
			<SubmitButton onSubmit={onClickSubmit} />
		</div>
	);
};

export default EditForm;
