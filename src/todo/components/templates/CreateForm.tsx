import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FormItem from '../organisms/FormItem';
import SubmitButton from '../molecules/SubmitButton';
import useInputs from '../../../utils/useInputs';
import useUnloadAlert from '../../../utils/useUnloadAlert';
import useTodoListState from '../../hooks/useTodoListState';
import { Tag, TagColor } from '../../types/Tag';
import TagList from '../organisms/TagList';
import dayjs from 'dayjs';
import TagColorRadio from '../molecules/TagColorRadio';

const CreateForm = () => {
	const router = useRouter();
	const { addTodo } = useTodoListState();
	const { enablePrevent, disablePrevent } = useUnloadAlert();
	const [tags, setTags] = useState<Tag[]>([]);
	const [tagNameInput, setTagNameInput] = useState('');
	const [tagColor, setTagColor] = useState<TagColor>(null);

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

	const isValidTag = (newTag: Tag) => {
		let isValid = true;
		if (tags.filter((tag) => tag.name === newTag.name).length) {
			alert('같은 이름의 태그가 존재합니다.');
			isValid = false;
		}
		if (tagColor === null) {
			alert('태그 색상을 선택하지 않았습니다.');
			isValid = false;
		}
		if (!tagNameInput) {
			alert('태그 이름이 입력되지 않았습니다.');
			isValid = false;
		}
		return isValid;
	};

	const addTag = (newTag: Tag) => {
		if (!isValidTag(newTag)) return;
		else setTags([...tags, newTag]);
	};

	const removeTag = (name: string) => {
		setTags(tags.filter((tag) => tag.name != name));
	};

	const onTagEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const newTag = { name: tagNameInput, color: tagColor };
			addTag(newTag);
			setTagNameInput('');
		}
	};

	const onClickSubmit = () => {
		addTodo({ ...data, tags: tags });
		router.push('/');
	};

	useEffect(() => {
		enablePrevent();
		return () => {
			disablePrevent();
		};
	}, [enablePrevent, disablePrevent]);

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
			<FormItem label={'태그'}>
				<div className={'flex flex-col gap-2'}>
					<TagColorRadio setTagColor={setTagColor} />
					<input
						name={'tag'}
						type={'text'}
						className="input input-bordered input-sm"
						value={tagNameInput}
						onChange={(e) => setTagNameInput(e.target.value)}
						onKeyPress={(e) => onTagEnter(e)}
					/>
					<p className={'text-sm'}>
						*색상을 선택하고 Enter 키를 입력하면 태그가 생성됩니다.
					</p>
					<TagList tags={tags} removeTag={removeTag} />
				</div>
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
		</div>
	);
};

export default CreateForm;
