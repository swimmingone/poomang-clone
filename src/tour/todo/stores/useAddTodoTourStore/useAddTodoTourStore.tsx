import { returnUseTourStore, TourState } from '../../../common/stores/returnUseTourStore';
import React from 'react';
import { Step } from 'react-joyride';

export enum AddTodoTourStep {
	CLICK_ADD_BUTTON,
	INPUT,
	SUBMIT_TODO,
}

export type AddTodoTourData = {
	addTodoButton?: React.RefObject<HTMLDivElement>;
	todoInput?: React.RefObject<HTMLInputElement>;
	submitButton?: React.RefObject<HTMLDivElement>;
};

export const createAddTodoTourSteps = (
	data: Pick<Required<AddTodoTourData>, 'addTodoButton' | 'todoInput' | 'submitButton'> &
		Pick<TourState<unknown>, 'nextStep'>,
): Step[] => [
	{
		target: data.addTodoButton.current!,
		content: '우선 할 일을 등록할 거에요.\n버튼을 눌러주세요.',
		disableBeacon: true,
		disableOverlayClose: true,
		hideCloseButton: true,
		hideFooter: true,
		spotlightClicks: true,
		spotlightPadding: 2,
		disableCloseOnEsc: true,
	},
];

export const useAddTodoTourStore = returnUseTourStore<AddTodoTourData>({
	displayTour: false,
});
