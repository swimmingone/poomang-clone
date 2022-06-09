import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormItem from '../organisms/FormItem';
import TagForm from '../organisms/TagForm';
import SubmitButton from '../molecules/SubmitButton';
import { Tag } from '../../types/Tag';
import { Todo } from '../../types/Todo';
import dayjs from 'dayjs';

interface Prop {
	selectedTodo: Todo;
	editTodo: (data: Todo) => void;
}

const EditForm = ({ selectedTodo, editTodo }: Prop) => {
	const router = useRouter();
	const [data, setData] = useState(selectedTodo);
	const [tags, setTags] = useState<Tag[]>(selectedTodo.tags);

	const onClickSubmit = () => {
		const newTodo = { ...data, editDate: dayjs().format('YYYY/MM/DD hh:mm'), tags: tags };
		editTodo(newTodo);
		router.push('/');
	};

	useEffect(() => {
		if (!selectedTodo) return;
		setData(selectedTodo);
	}, [selectedTodo]);

	return (
		<div className={'box-border flex w-full flex-col items-center justify-between gap-4 p-4'}>
			<FormItem label={'할 일'}>
				<>
					<input
						name={'title'}
						type={'text'}
						className="input input-bordered input-sm"
						value={data.title}
						onChange={(e) => setData({ ...data, title: e.target.value })}
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
			<FormItem label={'생성일'}>{data.creationDate}</FormItem>
			<FormItem label={'수정일'}>{data.editDate}</FormItem>
			<SubmitButton onSubmit={onClickSubmit} disabled={data.title === ''} />
		</div>
	);
};

export default EditForm;
