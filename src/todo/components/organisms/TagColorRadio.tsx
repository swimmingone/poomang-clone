import { TagColor } from '../../types/Tag';

interface Props {
	setTagColor: React.Dispatch<React.SetStateAction<TagColor>>;
}

const TagColorRadio = ({ setTagColor }: Props) => {
	const onClickButton = (value: TagColor) => {
		setTagColor(value);
	};

	return (
		<div className={'flex w-fit flex-col items-center gap-2'}>
			<div className={'flex gap-2'}>
				<div className={`badge`}></div>
				<div className={`badge badge-info`}></div>
				<div className={`badge badge-warning`}></div>
				<div className={`badge badge-success`}></div>
				<div className={`badge badge-error`}></div>
			</div>
			<div className={'flex gap-1'}>
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
		</div>
	);
};

export default TagColorRadio;
