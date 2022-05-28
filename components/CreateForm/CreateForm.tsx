import React from 'react';
import { useRouter } from 'next/router';
import FormItem from './FormItem';
import SubmitButton from '../SubmitButton';
import useInputs from '../../hooks/useInputs';
import useTodoState from '../../store/useTodoState';

const CreateForm = () => {
	const router = useRouter();
	const { addTodo } = useTodoState();

	const [data, onChangeData] = useInputs({
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

	const onClickSubmit = () => {
		addTodo(data);
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
				<input
					name={'dueDate'}
					type={'date'}
					className="input input-bordered input-sm w-full"
					onChange={onChangeData}
				/>
			</FormItem>
			<SubmitButton onSubmit={onClickSubmit} />
		</div>
	);
};

export default CreateForm;
