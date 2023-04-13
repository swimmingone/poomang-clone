import { create } from 'zustand';

export type TourData<T> = {
	displayTour: boolean;

	data?: T;
};

export type TourState<T> = TourData<T> & {
	currentStep: number;

	showTour: () => void;
	hideTour: () => void;
	resetTour: () => void;
	nextStep: () => void;
	setStep: (step: number) => void;
	addData: (data: T) => void;
};

/**
 * 각각의 tour를 만들 때 재사용할 수 있는 useTourStore hook을 생성하는 함수다.
 * @param initialData tour의 초기 데이터.
 */
export const returnUseTourStore = <T>(initialData: TourData<T>) =>
	create<TourState<T>>()((set) => {
		return {
			...initialData,
			currentStep: 0,

			showTour: () => set({ displayTour: true, currentStep: 0 }),
			hideTour: () => set({ displayTour: false, currentStep: 0 }),
			resetTour: () => set({ currentStep: 0 }),
			nextStep: () =>
				set((state) => {
					if (!state.displayTour) {
						return state;
					}

					return { currentStep: state.currentStep + 1 };
				}),
			setStep: (step) => set({ currentStep: step }),
			addData: (data) =>
				set((state) => ({
					...state,
					data: { ...state.data, ...data },
				})),
		};
	});
