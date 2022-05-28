import React from 'react';

interface Prop {
	onSubmit: () => void;
}

const SubmitButton = ({ onSubmit }: Prop) => {
	return (
		<div className={'flex justify-center'}>
			<button type={'submit'} className={'btn btn-primary'} onClick={onSubmit}>
				제출하기
			</button>
		</div>
	);
};

export default SubmitButton;
