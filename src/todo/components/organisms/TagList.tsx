import React from 'react';
import { Tag } from '../../types/Tag';
import TagBadge from '../molecules/TagBadge';

interface Props {
	tags: Tag[];
}

const TagList = ({ tags }: Props) => {
	return (
		<div className={'flex flex-wrap gap-1'}>
			{tags.map((tag) => (
				<TagBadge key={tag.name} name={tag.name} color={tag.color} />
			))}
		</div>
	);
};

export default TagList;
