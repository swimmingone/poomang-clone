import React from 'react';

interface Prop {
	title: string;
}

const PageTitle = ({ title }: Prop) => {
	return (
		<div className={'w-full bg-primary-content p-4 text-center text-2xl text-primary'}>
			{title}
		</div>
	);
};

export default PageTitle;
