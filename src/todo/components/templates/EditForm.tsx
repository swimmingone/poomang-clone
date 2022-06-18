import React from 'react';
import FormItem from 'src/common/components/FormItem';
import TagInputForm from '../organisms/TagInputForm';
import SubmitButton from '../molecules/SubmitButton';
import { Tag } from '../../types/Tag';
import { Todo } from '../../types/Todo';
import TagList from '../organisms/TagList';

interface Prop {
	tags: Tag[];
	setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
	removeTag: (name: string) => void;
	data: Todo;
	setData: React.Dispatch<React.SetStateAction<Todo | null>>;
	onClickSubmit: () => void;
}

const EditForm = ({ tags, setTags, removeTag, data, setData, onClickSubmit }: Prop) => {
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
						maxLength={20}
					/>
					{!data.title && (
						<p className={'text-sm text-red-600'}>*필수 입력 항목입니다.</p>
					)}
					<p className={'text-sm text-gray-300'}>{data.title.length} / 20</p>
				</>
			</FormItem>
			<FormItem label={'상세설명'}>
				<>
					<textarea
						name={'description'}
						rows={4}
						className="textarea textarea-bordered w-full"
						value={data.description}
						onChange={(e) => setData({ ...data, description: e.target.value })}
						maxLength={250}
					/>
					<p className={'text-sm text-gray-300'}>{data.description.length} / 250</p>
				</>
			</FormItem>
			<FormItem label={'태그 목록'}>
				<TagList tags={tags} removeTag={removeTag} />
			</FormItem>
			<TagInputForm tags={tags} setTags={setTags} />
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
