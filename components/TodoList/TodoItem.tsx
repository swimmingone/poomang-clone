import React, { useState } from 'react';
import DeleteModal from '../DeleteModal';
import { Tag } from '../../types/Todo';
import { useRouter } from 'next/router';
import useTodoListState from '../../store/useTodoListState';

interface Props {
	id: string;
	title: string;
	tags: Tag[];
	isDone: boolean;
}

const TodoItem = ({ id, title, tags, isDone }: Props) => {
	const router = useRouter();
	const { toggleDone } = useTodoListState();

	const [isModalVisible, setIsModalVisible] = useState(false);
	const onClickDelete = () => {
		setIsModalVisible(!isModalVisible);
	};

	return (
		<div className={'box-border border-t p-4'}>
			<div className={'flex'}>
				<input
					type={'checkbox'}
					className={'checkbox checkbox-primary checkbox-lg'}
					checked={isDone}
					onChange={() => toggleDone(id)}
				/>
				<div
					className={'flex w-11/12 cursor-pointer hover:text-primary'}
					onClick={() => router.push(`/edit/${id}`)}
				>
					<div
						className={`${
							isDone
								? 'flex-grow-1 pl-8 text-xl text-base-300 line-through'
								: 'flex-grow-1 pl-8 text-xl'
						}`}
					>
						{title}
					</div>
					{/*{isUrgent && <div className={'badge badge-sm badge-warning'}>!</div>}*/}
				</div>
				<button className={'btn btn-ghost btn-circle btn-sm'} onClick={onClickDelete}>
					x
				</button>
			</div>
			<div className={'box-border px-16'}>
				{tags.map((tag) => (
					<div key={tag.name} className={`badge badge-${tag.color} mr-1`}>
						{tag.name}
					</div>
				))}
			</div>
			{isModalVisible && (
				<DeleteModal
					id={id}
					isModalVisible={isModalVisible}
					setIsModalVisible={setIsModalVisible}
				/>
			)}
		</div>
	);
};

export default TodoItem;
