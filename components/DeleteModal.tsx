import React from 'react';
import useTodoListState from '../store/useTodoListState';

interface Props {
	id: string;
	isModalVisible: boolean;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal = ({ id, isModalVisible, setIsModalVisible }: Props) => {
	const { deleteTodo } = useTodoListState();

	return (
		<>
			<input
				type="checkbox"
				className="modal-toggle"
				checked={isModalVisible}
				onChange={() => {}}
			/>
			<div className="modal cursor-pointer">
				<div className="modal-box relative">
					<button
						className="btn btn-circle btn-xs absolute right-2 top-2"
						onClick={() => setIsModalVisible(false)}
					>
						✕
					</button>
					<h3 className="text-lg font-bold">정말 삭제하시겠어요?</h3>
					<div className="modal-action">
						<button
							className="btn btn-error btn-outline"
							onClick={() => deleteTodo(id)}
						>
							yes
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteModal;
