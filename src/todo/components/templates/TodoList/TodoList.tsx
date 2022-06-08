import React, { useState } from 'react';
import TodoItem from './TodoItem';
import DeleteModal from '../../organisms/DeleteModal';
import TodoListFilters from '../../organisms/TodoListFilters';
import useTodoListFilterState from '../../../hooks/useTodoListFilterState';

const TodoList = () => {
	const { filteredTodos } = useTodoListFilterState();

	const [isModalVisible, setIsModalVisible] = useState(false);
	const onClickDelete = () => {
		setIsModalVisible(!isModalVisible);
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
				<TodoListFilters />
				<button className={'btn btn-outline btn-error btn-xs'} onClick={onClickDelete}>
					delete completed
				</button>
			</div>
			<DeleteModal
				id={''}
				isItemModal={false}
				isModalVisible={isModalVisible}
				setIsModalVisible={setIsModalVisible}
			/>
			<div className={'flex w-full flex-col'}>{todoList}</div>
		</>
	);
};

export default TodoList;
