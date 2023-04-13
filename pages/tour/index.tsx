import PageTitle from '../../src/common/components/PageTitle';
import { TodoContext } from '../../src/todo/provider/TodoProvider';
import { NextPage } from 'next';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
	createAddTodoTourSteps,
	useAddTodoTourStore,
} from '../../src/tour/todo/stores/useAddTodoTourStore';
import dynamic from 'next/dynamic';
import TourTodoList from '../../src/tour/todo/components/templates/TourTodoList/TourTodoList';
import JoyrideTooltip from '../../src/tour/todo/components/organisms/JoyrideTooltip';
import { Todo } from '../../src/todo/types/Todo';

const ReactJoyride = dynamic(() => import('react-joyride'), { ssr: false });

const Home: NextPage = () => {
	const { onToggle, onDelete, onDeleteAll, onChangeFilter } = useContext(TodoContext);

	const [todos, setTodos] = useState<Todo[]>([]);

	const [isAdding, setIsAdding] = useState(false);

	const goCreate = () => {
		setIsAdding(true);
		setTimeout(() => {
			tourStore.nextStep();
		}, 0);
	};

	const tourStore = useAddTodoTourStore();

	const tourData: Parameters<typeof createAddTodoTourSteps>[0] = {
		addTodoButton: useRef<HTMLDivElement>(null),
		todoInput: useRef<HTMLInputElement>(null),
		submitButton: useRef<HTMLButtonElement>(null),
		todoList: useRef<HTMLDivElement>(null),
		nextStep: tourStore.nextStep,
	};

	useEffect(() => {
		tourStore.addData(tourData);
		tourStore.addData({ updateTodoData: setTodos });

		setTimeout(() => {
			tourStore.showTour();
		}, 1000);
		// tourStore를 의존성에 추가하면 무한로딩이 발생한다.
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ReactJoyride
				continuous={true}
				run={tourStore.displayTour}
				stepIndex={tourStore.currentStep}
				steps={createAddTodoTourSteps(tourData)}
				tooltipComponent={JoyrideTooltip}
				floaterProps={{
					disableAnimation: true,
				}}
			/>
			<PageTitle title={'Todo-list'} />
			<TourTodoList
				changeFilter={onChangeFilter}
				todos={todos}
				toggleDone={onToggle}
				deleteTodo={onDelete}
				deleteAllDone={onDeleteAll}
				goCreate={goCreate}
				isAdding={isAdding}
				setIsAdding={setIsAdding}
			/>
		</>
	);
};

export default Home;
