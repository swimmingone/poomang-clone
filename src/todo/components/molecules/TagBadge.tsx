import React from 'react';
import { TagColor } from '../../types/Tag';
import { useRouter } from 'next/router';

interface Props {
	name: string;
	color: TagColor;
	removeTag?: (name: string) => void;
}

const TagBadge = ({ name, color, removeTag }: Props) => {
	const router = useRouter();

	const onClickButton = () => {
		if (removeTag) {
			removeTag(name);
		}
	};

	return router.pathname === '/' ? (
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
