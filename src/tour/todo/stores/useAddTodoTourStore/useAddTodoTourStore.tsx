import { returnUseTourStore, TourState } from '../../../common/stores/returnUseTourStore';
import React from 'react';
import { Step } from 'react-joyride';
import { Todo } from '../../../../todo/types/Todo';

export type AddTodoTourData = {
	addTodoButton?: React.RefObject<HTMLDivElement>;
	todoInput?: React.RefObject<HTMLInputElement>;
	submitButton?: React.RefObject<HTMLButtonElement>;
	todoList?: React.RefObject<HTMLDivElement>;
	updateTodoData?: (data: Todo[]) => void;
};

export const createAddTodoTourSteps = (
	data: Pick<
		Required<AddTodoTourData>,
		'addTodoButton' | 'todoInput' | 'submitButton' | 'todoList'
	> &
		Pick<TourState<unknown>, 'nextStep'>,
): Step[] => [
	{
		target: data.addTodoButton.current!,
		content: '할 일을 추가할 거에요.\n버튼을 눌러주세요.',
		disableBeacon: true,
		disableOverlayClose: true,
		hideCloseButton: true,
		hideFooter: true,
		spotlightClicks: true,
		spotlightPadding: 2,
		disableCloseOnEsc: true,
	},
	{
		target: data.todoInput.current!,
		content: '할 일을 입력해주세요.',
		disableBeacon: true,
		disableOverlayClose: true,
		hideCloseButton: true,
		hideFooter: true,
		spotlightClicks: true,
		spotlightPadding: 2,
		disableCloseOnEsc: true,
		hideBackButton: true,
	},
	{
		target: data.submitButton.current!,
		content: '버튼을 눌러 작성한 할 일을 목록에 추가하세요.',
		disableBeacon: true,
		disableOverlayClose: true,
		hideCloseButton: true,
		hideFooter: true,
		spotlightClicks: true,
		spotlightPadding: 2,
		disableCloseOnEsc: true,
	},
	{
		target: data.todoList.current!,
		content: '할 일이 추가 되었어요! 🎉',
		disableBeacon: true,
		disableOverlayClose: true,
		hideCloseButton: true,
		hideFooter: true,
		spotlightClicks: false,
		spotlightPadding: 2,
		disableCloseOnEsc: true,
		placement: 'top',
	},
];

export const useAddTodoTourStore = returnUseTourStore<AddTodoTourData>({
	displayTour: false,
});
