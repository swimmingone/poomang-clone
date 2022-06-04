import React from 'react';
import { useRouter } from 'next/router';

const CreateButton = () => {
	const router = useRouter();
	return (
		<div className={'box-border flex justify-center pt-4'}>
			<button
				className="btn btn-primary btn-circle text-2xl"
				type="button"
				onClick={() => router.push('/create')}
			>
				+
			</button>
		</div>
	);
};

export default CreateButton;
