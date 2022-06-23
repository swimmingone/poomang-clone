import React from 'react';
import FormItem from 'src/common/components/FormItem';
import TagInputForm from '../organisms/TagInputForm';
import SubmitButton from '../molecules/SubmitButton';
import { Todo } from '../../types/Todo';
import { Tag } from '../../types/Tag';
import TagList from '../organisms/TagList';

interface Props {
	tags: Tag[];
	setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
	removeTag: (name: string) => void;
	data: Todo;
	onChangeData: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	onClickSubmit: () => void;
}

const CreateForm = ({ tags, setTags, removeTag, data, onChangeData, onClickSubmit }: Props) => {
	return (
		<div className={'box-border flex w-full flex-col items-center justify-between gap-4 p-4'}>
			<FormItem label={'할 일'}>
				<>
					<input
						name={'title'}
						type={'text'}
						className="input input-bordered input-sm"
						onChange={onChangeData}
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
						onChange={onChangeData}
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
					onChange={onChangeData}
				/>
			</FormItem>
			<SubmitButton onSubmit={onClickSubmit} disabled={data.title === ''} />
		</div>
	);
};

export default CreateForm;
