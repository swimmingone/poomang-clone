import React, { useState } from 'react';
import DeleteModal from '../../organisms/DeleteModal';
import { Tag } from '../../../types/Tag';
import { useRouter } from 'next/router';
import useTodoListState from '../../../store/useTodoListState';
import dayjs from 'dayjs';
import TagList from '../../organisms/TagList';

interface Props {
	id: string;
	title: string;
	tags: Tag[];
	isDone: boolean;
	dueDate: string;
}

const TodoItem = ({ id, title, tags, isDone, dueDate }: Props) => {
	const router = useRouter();
	const { toggleDone } = useTodoListState();
	const now = dayjs().format('YYYY/MM/DD hh:mm');
	const isUrgent = dayjs(dueDate, 'YYYY/MM/DD hh:mm').diff(now, 'm') <= 3 * 24 * 60;

	const [isModalVisible, setIsModalVisible] = useState(false);
	const onClickDelete = () => {
		setIsModalVisible(!isModalVisible);
	};

	return (
		<div
			className={`${
				isUrgent ? 'order-first box-border border-t p-4' : 'box-border border-t p-4'
			}`}
		>
			<div className={'flex'}>
				<input
					type={'checkbox'}
					className={'checkbox checkbox-primary checkbox-lg'}
					checked={isDone}
					onChange={() => toggleDone(id)}
				/>
				<div
					className={'flex w-11/12 cursor-pointer hover:text-primary-focus'}
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
					{isUrgent && <div className={'badge badge-xs badge-warning m-1'}>!</div>}
				</div>
				<button className={'btn btn-ghost btn-circle btn-sm'} onClick={onClickDelete}>
					x
				</button>
			</div>
			<div className={'box-border px-16 leading-none text-base-300'}>{dueDate}</div>
			<TagList tags={tags} />
			{isModalVisible && (
				<DeleteModal
					id={id}
					isItemModal
					isModalVisible={isModalVisible}
					setIsModalVisible={setIsModalVisible}
				/>
			)}
		</div>
	);
};

export default TodoItem;
