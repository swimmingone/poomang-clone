import React from 'react';
import { useRouter } from 'next/router';
import FormItem from './FormItem';
import SubmitButton from '../SubmitButton';
import useInputs from '../../hooks/useInputs';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../store/TodoListState';

const CreateForm = () => {
	const router = useRouter();
	const setTodoList = useSetRecoilState(todoListState);

	const [data, onChangeData] = useInputs({
		title: '',
		description: '',
	});

	const newID = function () {
		return Math.random().toString(36).substring(2, 16);
	};
	const addTodo = () => {
		setTodoList((oldList) => [
			...oldList,
			{
				id: newID(),
				title: data.title,
				description: data.description,
				tags: [],
				dueDate: 'string',
				creationDate: 'string',
				editDate: 'string',
				doneDate: 'string',
				isDone: false,
			},
		]);
	};

	const onClickSubmit = () => {
		addTodo();
		router.push('/');
	};

	return (
		<div className={'box-border flex w-full flex-col items-center justify-between gap-4 p-4'}>
			<FormItem label={'할 일'}>
				<input
					name={'title'}
					type={'text'}
					className="input input-bordered input-sm"
					onChange={onChangeData}
				/>
			</FormItem>
			<FormItem label={'상세설명'}>
				<textarea
					name={'description'}
					rows={4}
					className="textarea textarea-bordered w-full"
					onChange={onChangeData}
				/>
			</FormItem>
			<FormItem label={'마감목표일'}>
				<input type={'date'} className="input input-bordered input-sm w-full" />
			</FormItem>
			<SubmitButton onSubmit={onClickSubmit} />
		</div>
	);
};

export default CreateForm;
