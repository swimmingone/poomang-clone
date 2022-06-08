import React from 'react';
import useTodoListState from '../../hooks/useTodoListState';

interface Props {
	id: string;
	isItemModal: boolean;
	isModalVisible: boolean;
	setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal = ({ id, isItemModal, isModalVisible, setIsModalVisible }: Props) => {
	const { deleteTodo, deleteAllDone } = useTodoListState();

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
					{isItemModal ? (
						<>
							<h3 className="text-lg font-bold">정말 삭제하시겠어요?</h3>
							<div className="modal-action">
								<button
									className="btn btn-outline btn-error"
									onClick={() => {
										deleteTodo(id);
										setIsModalVisible(false);
									}}
								>
									yes
								</button>
							</div>
						</>
					) : (
						<>
							<h3 className="text-lg font-bold">완료된 할 일을 일괄 삭제합니다.</h3>
							<div className="modal-action">
								<button
									className="btn btn-outline btn-error"
									onClick={() => {
										deleteAllDone();
										setIsModalVisible(false);
									}}
								>
									yes
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default DeleteModal;
