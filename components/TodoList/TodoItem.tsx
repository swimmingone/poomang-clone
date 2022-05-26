import React from 'react';
import { Todo } from '../../types/Todo';

interface Props {
	todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
	const { title, isDone } = todo;
	return (
		<div className={'box-border flex items-center p-4'}>
			<div className={'text-xl'}>{title}</div>
			{isDone && <div className={'p-4 text-blue-800'}>&#x2713;</div>}
		</div>
	);
};

export default TodoItem;
