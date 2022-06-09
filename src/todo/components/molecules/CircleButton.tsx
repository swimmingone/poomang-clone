import React from 'react';

interface Props {
	name: string;
	onClick: () => void;
}

const CircleButton = ({ name, onClick }: Props) => {
	return (
		<button className="btn btn-primary btn-circle text-2xl" type="button" onClick={onClick}>
			{name}
		</button>
	);
};

export default CircleButton;
