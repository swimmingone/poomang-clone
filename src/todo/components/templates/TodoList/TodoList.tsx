import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Modal from 'src/common/components/Modal';
import TodoListFilters from '../../organisms/TodoListFilters';
import CircleButton from '../../molecules/CircleButton';
import { Todo } from '../../../types/Todo';

interface Props {
	filteredTodos: Todo[];
	changeFilter: (filter: string) => void;
	toggleDone: (id: string) => void;
	deleteTodo: (id: string) => void;
	deleteAllDone: () => void;
	goCreate: () => void;
}

const TodoList = ({
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
		<TodoItem
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
			<div className={'box-border flex'}>
				<CircleButton name={'+'} onClick={goCreate} />
			</div>
		</>
	);
};

export default TodoList;
