import React from 'react';
import { TagColor } from '../../types/Tag';

interface Props {
	name: string;
	color: TagColor;
	onRemove?: (name: string) => void;
}

const TagBadge = ({ name, color, onRemove }: Props) => {
	const onClickButton = () => {
		if (onRemove) {
			onRemove(name);
		}
	};

	return !onRemove ? (
		<div className={`badge badge-${color}`}>{name}</div>
	) : (
		<div className={`badge badge-${color} flex gap-0.5`}>
			{name}
			<button className={'btn btn-ghost btn-circle btn-xs'} onClick={onClickButton}>
				x
			</button>
		</div>
	);
};

export default TagBadge;
