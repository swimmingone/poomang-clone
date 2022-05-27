import React from 'react';
import { Todo } from '../../types/Todo';

interface Props {
	todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
	let { title, isDone, tags } = todo;
	return (
		<div className={'box-border border-t p-4'}>
			<div className={'flex justify-between'}>
				<input
					type={'checkbox'}
					className={'checkbox checkbox-primary checkbox-lg'}
					checked={isDone}
				/>
				<div className={'flex w-11/12 items-center hover:text-primary'}>
					<div className={'flex-grow-1 pl-8 text-xl'}>{title}</div>
					{/*{isUrgent && <div className={'badge badge-sm badge-warning'}>!</div>}*/}
				</div>
				<button className={'btn btn-ghost btn-circle btn-sm'}>x</button>
			</div>
			<div className={'box-border pl-16'}>
				{tags.map((tag) => (
					<div key={tag.name} className={`badge badge-${tag.color}`}>
						{tag.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default TodoItem;
