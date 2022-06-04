import React, { ReactChild, ReactChildren } from 'react';

interface Prop {
	label: string;
	children: ReactChild | ReactChildren;
}

const FormItem = ({ label, children }: Prop) => {
	return (
		<div className={'form-control w-full'}>
			<label className={'label'}>
				<span className={'label-text'}>{label}</span>
			</label>
			{children}
		</div>
	);
};

export default FormItem;
