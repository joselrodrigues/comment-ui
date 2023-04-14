import React, { useEffect, useState } from 'react';

/**
 * A custom React hook that adds a pulse animation when a button is clicked.
 * @param {() => void} onClick - The function to be executed when the button is clicked.
 * @returns {[boolean, React.MouseEventHandler<HTMLDivElement>]} - An array containing isPulsing state and the handleClick function to be used in the component.
 */
const usePulse = (
	onClick: () => void
): [boolean, React.MouseEventHandler<HTMLDivElement>] => {
	const [isPulsing, setIsPulsing] = useState(false);
	const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		return () => {
			if (timeoutId) {
				clearTimeout(timeoutId);
			}
		};
	}, [timeoutId]);

	const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
		setIsPulsing(true);
		const id = setTimeout(() => {
			onClick();
			setIsPulsing(false);
		}, 500);
		setTimeoutId(id);
	};

	return [isPulsing, handleClick];
};

export default usePulse;
