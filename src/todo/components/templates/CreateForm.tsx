import React, { useState } from 'react';
import { useRouter } from 'next/router';
import FormItem from '../organisms/FormItem';
import TagForm from '../organisms/TagForm';
import SubmitButton from '../molecules/SubmitButton';
import useInputs from '../../../utils/useInputs';
import { Todo } from '../../types/Todo';
import { Tag } from '../../types/Tag';
import dayjs from 'dayjs';

interface Props {
	addTodo: (data: Todo) => void;
}

const CreateForm = ({ addTodo }: Props) => {
	const router = useRouter();
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
	const [tags, setTags] = useState<Tag[]>([]);

	const onClickSubmit = () => {
		const newTodo = { ...data, tags: tags };
		addTodo(newTodo);
		router.push('/');
	};

	return (
		<div className={'box-border flex w-full flex-col items-center justify-between gap-4 p-4'}>
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
			<TagForm tags={tags} setTags={setTags} />
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
		</div>
	);
};

export default CreateForm;
