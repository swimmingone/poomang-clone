import React from 'react';
import FormItem from './FormItem';
import SubmitButton from '../SubmitButton';

const CreateForm = () => {
	return (
		<div className={'box-border flex w-full flex-col items-center justify-between gap-4 p-4'}>
			<FormItem label={'할 일'}>
				<input type={'text'} className="input input-bordered input-sm" />
			</FormItem>
			<FormItem label={'상세설명'}>
				<textarea rows={4} className="textarea textarea-bordered w-full" />
			</FormItem>
			<FormItem label={'마감목표일'}>
				<input type={'date'} className="input input-bordered input-sm w-full" />
			</FormItem>
			<SubmitButton />
		</div>
	);
};

export default CreateForm;
