import CircleButton from '../../../../../todo/components/molecules/CircleButton';
import { Todo } from '../../../../../todo/types/Todo';
import TodoListFilters from '../../../../../todo/components/organisms/TodoListFilters';
import { useAddTodoTourStore } from '../../../stores/useAddTodoTourStore';
import React, { useEffect, useMemo, useState } from 'react';
import TourTodoItem from './TourTodoItem';

interface Props {
	todos: Todo[];
	changeFilter: (filter: string) => void;
	toggleDone: (id: string) => void;
	deleteTodo: (id: string) => void;
	deleteAllDone: () => void;
	goCreate: () => void;
	isAdding?: boolean;
	setIsAdding?: (isAdding: boolean) => void;
}

const TourTodoList = ({
	todos,
	changeFilter,
	toggleDone,
	deleteTodo,
	goCreate,
	isAdding,
	setIsAdding,
}: Props) => {
	const initialTodo = {
		id: '',
		title: '',
		description: '',
		tags: [],
		dueDate: '',
		creationDate: '',
		editDate: '',
		doneDate: '',
		isDone: false,
	};
	const [data, setData] = useState<Todo>(initialTodo);

	const todoList = todos?.map((todo) => (
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

	const confirmDisabled: boolean = useMemo(() => {
		return data?.title === '';
	}, [data]);

	const tourStore = useAddTodoTourStore();

	useEffect(() => {
		if (!confirmDisabled) {
			setTimeout(() => {
				tourStore.nextStep();
			}, 1000);
		}
		// tourStore를 의존성에 추가하면 무한로딩이 발생한다.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [confirmDisabled, tourStore.nextStep]);

	return (
		<>
			<div className={'box-border flex w-full justify-between py-2'}>
				<TodoListFilters changeFilter={changeFilter} />
				<button className={'btn btn-outline btn-error btn-xs'}>delete completed</button>
			</div>
			<div className={'flex w-full flex-col'} ref={tourStore.data?.todoList}>
				{todoList}
			</div>
			<div className={'box-border flex'} ref={tourStore.data?.addTodoButton}>
				<CircleButton name={'+'} onClick={goCreate} />
			</div>
			{isAdding && (
				<div className={'flex h-3 gap-2 pt-4'}>
					<input
						ref={tourStore.data?.todoInput}
						name={'title'}
						type={'text'}
						className="input input-bordered input-sm"
						value={data?.title}
						onChange={(e) => setData(data && { ...data, title: e.target.value })}
						maxLength={20}
					/>
					<button
						ref={tourStore.data?.submitButton}
						className={'btn btn-primary btn-sm'}
						onClick={() => {
							tourStore.data?.updateTodoData?.([data]);
							tourStore.nextStep();
							setIsAdding?.(false);
						}}
						disabled={confirmDisabled}
					>
						확인
					</button>
				</div>
			)}
		</>
	);
};

export default TourTodoList;
