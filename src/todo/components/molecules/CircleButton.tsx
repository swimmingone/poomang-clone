import React from 'react';

interface Props {
	name: string;
	onClick: () => void;
}

const CircleButton = ({ name, onClick }: Props) => {
	return (
		<div className={'box-border flex justify-center pt-4'}>
			<button className="btn btn-primary btn-circle text-2xl" type="button" onClick={onClick}>
				{name}
			</button>
		</div>
	);
};

export default CircleButton;
