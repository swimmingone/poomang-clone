import { TagColor } from '../../types/Tag';

interface Props {
	setTagColor: React.Dispatch<React.SetStateAction<TagColor>>;
}

const TagColorRadio = ({ setTagColor }: Props) => {
	const onClickButton = (value: TagColor) => {
		setTagColor(value);
	};

	return (
		<div className={'flex gap-2'}>
			<input
				type="radio"
				name="tag-color-radio"
				className="radio border-neutral"
				onClick={() => onClickButton('')}
			/>
			<input
				type="radio"
				name="tag-color-radio"
				className="radio border-info checked:bg-info"
				onClick={() => onClickButton('info')}
			/>
			<input
				type="radio"
				name="tag-color-radio"
				className="radio border-warning checked:bg-warning"
				onClick={() => onClickButton('warning')}
			/>
			<input
				type="radio"
				name="tag-color-radio"
				className="radio border-success checked:bg-success"
				onClick={() => onClickButton('success')}
			/>
			<input
				type="radio"
				name="tag-color-radio"
				className="radio border-error checked:bg-error"
				onClick={() => onClickButton('error')}
			/>
		</div>
	);
};

export default TagColorRadio;
