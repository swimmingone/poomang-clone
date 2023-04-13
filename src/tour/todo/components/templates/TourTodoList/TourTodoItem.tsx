import { useRouter } from 'next/router';
import TagList from '../../../../../todo/components/organisms/TagList';
import dayjs from 'dayjs';
import Modal from '../../../../../common/components/Modal';
import { useState } from 'react';
import { Tag } from '../../../../../todo/types/Tag';

interface Props {
	id: string;
	title: string;
	tags: Tag[];
	isDone: boolean;
	dueDate: string;
	toggleDone: (id: string) => void;
	deleteTodo: (id: string) => void;
}

const TourTodoItem = ({ id, title, tags, isDone, dueDate, toggleDone, deleteTodo }: Props) => {
	const router = useRouter();
	const now = dayjs().format('YYYY/MM/DD hh:mm');
	const isUrgent = dayjs(dueDate, 'YYYY/MM/DD hh:mm').diff(now, 'm') <= 3 * 24 * 60;

	const [isModalVisible, setIsModalVisible] = useState(false);
	const onClickDelete = () => {
		setIsModalVisible(true);
	};
	const closeModal = () => {
		setIsModalVisible(false);
	};
	const onClickModalOk = () => {
		deleteTodo(id);
		closeModal();
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
			<div className={'box-border px-16 py-1'}>
				<TagList tags={tags} />
			</div>
			{isModalVisible && (
				<Modal
					message={'정말로 삭제하시겠어요?'}
					isVisible={isModalVisible}
					onClose={closeModal}
					onOk={onClickModalOk}
				/>
			)}
		</div>
	);
};

export default TourTodoItem;
