import React from 'react';
import { useRouter } from 'next/router';

const SubmitButton = () => {
	const router = useRouter();
	return (
		<div className={'flex justify-center'}>
			<button type={'submit'} className={'btn btn-primary'} onClick={() => router.push('/')}>
				제출하기
			</button>
		</div>
	);
};

export default SubmitButton;
