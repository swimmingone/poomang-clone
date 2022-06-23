import React from 'react';

interface Prop {
	onClick: () => void;
	disabled: boolean;
}

const SubmitButton = ({ onClick, disabled }: Prop) => {
	return (
		<button type="submit" className={'btn btn-primary'} onClick={onClick} disabled={disabled}>
			제출하기
		</button>
	);
};

export default SubmitButton;
