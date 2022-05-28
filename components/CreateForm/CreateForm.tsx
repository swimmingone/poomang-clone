import React from 'react';
import { useRouter } from 'next/router';
import FormItem from './FormItem';
import SubmitButton from '../SubmitButton';
import useInputs from '../../hooks/useInputs';
import useTodoListState from '../../store/useTodoListState';
import dayjs from 'dayjs';

const CreateForm = () => {
	const router = useRouter();
	const { addTodo } = useTodoListState();

	const [data, onChangeData] = useInputs({
		id: '',
		title: '',
		description: '',
		tags: [],
		dueDate: '',
		creationDate: dayjs().format('YYYY/MM/DD hh:mm'),
		editDate: '',
		doneDate: '',
		isDone: false,
	});

	const onClickSubmit = () => {
		addTodo(data);
		router.push('/');
	};

	return (
		<form className={'box-border flex w-full flex-col items-center justify-between gap-4 p-4'}>
			<FormItem label={'할 일'}>
				<>
					<input
						name={'title'}
						type={'text'}
						className="input input-bordered input-sm"
						onChange={onChangeData}
					/>
					{!data.title && (
						<p className={'text-sm text-red-600'}>*필수 입력 항목입니다.</p>
					)}
				</>
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
			<SubmitButton onSubmit={onClickSubmit} disabled={data.title === ''} />
		</form>
	);
};

export default CreateForm;
