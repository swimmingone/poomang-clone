import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Modal from '../../organisms/Modal';
import TodoListFilters from '../../organisms/TodoListFilters';
import { Todo } from '../../../types/Todo';
import { SetterOrUpdater } from 'recoil';
import useTodoListState from '../../../hooks/useTodoListState';

interface Props {
	filteredTodos: Todo[];
	setFilter: SetterOrUpdater<string>;
}

const TodoList = ({ filteredTodos, setFilter }: Props) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const { deleteAllDone } = useTodoListState();
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
		/>
	));

	return (
		<>
			<div className={'box-border flex w-full justify-between py-2'}>
				<TodoListFilters setFilter={setFilter} />
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
		</>
	);
};

export default TodoList;
