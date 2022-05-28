import React, { useState } from 'react';
import TodoItem from './TodoItem';
import useTodoListState from '../../store/useTodoListState';
import DeleteModal from '../DeleteModal';

const TodoList = () => {
	const { todos } = useTodoListState();

	const [isModalVisible, setIsModalVisible] = useState(false);
	const onClickDelete = () => {
		setIsModalVisible(!isModalVisible);
	};

	const todoList = todos?.map((todo) => (
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
			<div className={'box-border flex w-full justify-end py-2'}>
				<button className={'btn btn-error btn-outline btn-xs'} onClick={onClickDelete}>
					delete completed
				</button>
			</div>
			<DeleteModal
				id={''}
				isItemModal={false}
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>
			<div className={'w-full'}>{todoList}</div>
		</>
	);
};

export default TodoList;
