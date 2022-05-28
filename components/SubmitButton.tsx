import React from 'react';

interface Prop {
	onSubmit: () => void;
	disabled: boolean;
}

const SubmitButton = ({ onSubmit, disabled }: Prop) => {
	return (
		<button type="submit" className={'btn btn-primary'} onClick={onSubmit} disabled={disabled}>
			제출하기
		</button>
	);
};

export default SubmitButton;
