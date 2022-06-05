import React from 'react';

interface Props {
	name: string;
	color: string;
}

const TagBadge = ({ name, color }: Props) => {
	return (
		<div key={name} className={`badge badge-${color}`}>
			{name}
		</div>
	);
};

export default TagBadge;
