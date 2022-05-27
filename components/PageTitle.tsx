import React from 'react';

interface Prop {
	title: string;
}

const PageTitle = ({ title }: Prop) => {
	return <div className={'bg-blue-100 p-4 text-center text-2xl text-blue-600'}>{title}</div>;
};

export default PageTitle;
