import { useRouter } from 'next/router';
import PageTitle from '../../src/common/components/PageTitle';
import { TodoContext } from '../../src/todo/provider/TodoProvider';
import { NextPage } from 'next';
import { useContext, useEffect, useRef } from 'react';
import {
	createAddTodoTourSteps,
	useAddTodoTourStore,
} from '../../src/tour/todo/stores/useAddTodoTourStore';
import dynamic from 'next/dynamic';
import TourTodoList from '../../src/tour/todo/components/templates/TourTodoList/TourTodoList';
import JoyrideTooltip from '../../src/tour/todo/components/organisms/JoyrideTooltip';

const ReactJoyride = dynamic(() => import('react-joyride'), { ssr: false });

const Home: NextPage = () => {
	const router = useRouter();
	const { onToggle, onDelete, onDeleteAll, filteredTodos, onChangeFilter } =
		useContext(TodoContext);

	const goCreate = () => {
		router.push('/tour/create');
	};

	const tourStore = useAddTodoTourStore();

	const tourData: Parameters<typeof createAddTodoTourSteps>[0] = {
		addTodoButton: useRef<HTMLDivElement>(null),
		todoInput: useRef<HTMLInputElement>(null),
		submitButton: useRef<HTMLDivElement>(null),
		nextStep: tourStore.nextStep,
	};

	useEffect(() => {
		tourStore.addData(tourData);

		setTimeout(() => {
			tourStore.showTour();
		}, 1000);
	}, []);
	return (
		<>
			<ReactJoyride
				continuous={true}
				run={tourStore.displayTour}
				stepIndex={tourStore.currentStep}
				steps={createAddTodoTourSteps(tourData)}
				tooltipComponent={JoyrideTooltip}
			/>
			<PageTitle title={'Todo-list'} />
			<TourTodoList
				changeFilter={onChangeFilter}
				filteredTodos={filteredTodos}
				toggleDone={onToggle}
				deleteTodo={onDelete}
				deleteAllDone={onDeleteAll}
				goCreate={goCreate}
			/>
		</>
	);
};

export default Home;
