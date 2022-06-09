import React from 'react';
import { Tag } from '../../types/Tag';
import TagBadge from '../molecules/TagBadge';

interface Props {
	tags: Tag[];
	removeTag?: (name: string) => void;
}

const TagList = ({ tags, removeTag }: Props) => {
	return (
		<div className={'flex flex-wrap gap-1'}>
			{tags.map((tag) => (
				<TagBadge key={tag.name} name={tag.name} color={tag.color} onRemove={removeTag} />
			))}
		</div>
	);
};

export default TagList;
