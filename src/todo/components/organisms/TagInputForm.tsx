import React, { useState } from 'react';
import { Tag, TagColor } from '../../types/Tag';
import TagColorRadio from './TagColorRadio';
import FormItem from './FormItem';

interface Props {
	tags: Tag[];
	setTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}

const TagInputForm = ({ tags, setTags }: Props) => {
	const [tagNameInput, setTagNameInput] = useState('');
	const [tagColor, setTagColor] = useState<TagColor>(null);

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
		setTags([...tags, newTag]);
	};

	const onTagEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			const newTag = { name: tagNameInput, color: tagColor };
			addTag(newTag);
			setTagNameInput('');
		}
	};

	return (
		<FormItem label={'태그 만들기'}>
			<div className={'box-border flex flex-col gap-2 border p-2'}>
				<TagColorRadio setTagColor={setTagColor} />
				<input
					name={'tag'}
					type={'text'}
					className="input input-bordered input-sm"
					value={tagNameInput}
					onChange={(e) => setTagNameInput(e.target.value)}
					onKeyPress={(e) => onTagEnter(e)}
				/>
				<p className={'text-sm'}>*색상을 선택하고 Enter 키를 입력하면 태그가 생성됩니다.</p>
			</div>
		</FormItem>
	);
};

export default TagInputForm;
