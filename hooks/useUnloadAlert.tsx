import React from 'react';

const useUnloadAlert = () => {
	const listener = (event: BeforeUnloadEvent) => {
		event.preventDefault();
		event.returnValue = '';
	};

	const enablePrevent = () => window.addEventListener('beforeunload', listener);
	const disablePrevent = () => window.removeEventListener('beforeunload', listener);

	return { enablePrevent, disablePrevent };
};

export default useUnloadAlert;
