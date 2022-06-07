import React from 'react';
import { TagColor } from '../../types/Tag';

interface Props {
	name: string;
	color: TagColor;
}

const TagBadge = ({ name, color }: Props) => {
	return <div className={`badge badge-${color}`}>{name}</div>;
};

export default TagBadge;
