import CircleButton from '../../../../../todo/components/molecules/CircleButton';
import { Todo } from '../../../../../todo/types/Todo';
import TodoListFilters from '../../../../../todo/components/organisms/TodoListFilters';
import { useAddTodoTourStore } from '../../../stores/useAddTodoTourStore';
import Modal from '../../../../../common/components/Modal';
import { useState } from 'react';
import TourTodoItem from './TourTodoItem';

interface Props {
	filteredTodos: Todo[];
	changeFilter: (filter: string) => void;
	toggleDone: (id: string) => void;
	deleteTodo: (id: string) => void;
	deleteAllDone: () => void;
	goCreate: () => void;
}

const TourTodoList = ({
	filteredTodos,
	changeFilter,
	toggleDone,
	deleteTodo,
	deleteAllDone,
	goCreate,
}: Props) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const onClickDelete = () => {
		setIsModalVisible(true);
	};
	const closeModal = () => {
		setIsModalVisible(false);
	};
	const onClickModalOk = () => {
		deleteAllDone();
		closeModal();
	};

	const todoList = filteredTodos?.map((todo) => (
		<TourTodoItem
			key={todo.id}
			id={todo.id}
			title={todo.title}
			isDone={todo.isDone}
			dueDate={todo.dueDate}
			tags={todo.tags}
			toggleDone={toggleDone}
			deleteTodo={deleteTodo}
		/>
	));

	const tourStore = useAddTodoTourStore();
	return (
		<>
			<div className={'box-border flex w-full justify-between py-2'}>
				<TodoListFilters changeFilter={changeFilter} />
				<button className={'btn btn-outline btn-error btn-xs'} onClick={onClickDelete}>
					delete completed
				</button>
			</div>
			<Modal
				message={'완료된 할 일을 일괄 삭제합니다.'}
				isVisible={isModalVisible}
				onClose={closeModal}
				onOk={onClickModalOk}
			/>
			<div className={'flex w-full flex-col'}>{todoList}</div>
			<div className={'box-border flex'} ref={tourStore.data?.addTodoButton}>
				<CircleButton name={'+'} onClick={goCreate} />
			</div>
		</>
	);
};

export default TourTodoList;
