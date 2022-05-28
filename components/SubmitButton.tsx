import React from 'react';

interface Prop {
	onSubmit: () => void;
}

const SubmitButton = ({ onSubmit }: Prop) => {
	return (
		<button type="submit" className={'btn btn-primary'} onClick={onSubmit}>
			제출하기
		</button>
	);
};

export default SubmitButton;
