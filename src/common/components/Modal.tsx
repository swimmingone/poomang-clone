import React from 'react';

interface Props {
	message: string;
	isVisible: boolean;
	onClose: () => void;
	onOk: () => void;
}

const Modal = ({ message, isVisible, onClose, onOk }: Props) => {
	return (
		<>
			<input type="checkbox" className="modal-toggle" checked={isVisible} readOnly />
			<div className="modal cursor-pointer">
				<div className="modal-box relative">
					<button
						className="btn btn-circle btn-xs absolute right-2 top-2"
						onClick={onClose}
					>
						✕
					</button>
					<h3 className="text-lg font-bold">{message}</h3>
					<div className="modal-action">
						<button className="btn btn-outline btn-error" onClick={onOk}>
							ok
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
