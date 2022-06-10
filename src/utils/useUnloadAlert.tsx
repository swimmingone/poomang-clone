import React, { useState } from 'react';

const useUnloadAlert = () => {
	const [isBlocking, setIsBlocking] = useState(false);

	const block = () => {
		setIsBlocking(true);
	};

	const listener = (event: BeforeUnloadEvent) => {
		if (isBlocking) {
			event.preventDefault();
			event.returnValue = '';
		}
	};

	const enablePrevent = () => window.addEventListener('beforeunload', listener);
	const disablePrevent = () => window.removeEventListener('beforeunload', listener);

	return { enablePrevent, disablePrevent, block };
};

export default useUnloadAlert;
