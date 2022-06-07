import { useState, useEffect } from 'react';

export function Loaderanimatins({
	time = 0,
	loaderready = false,
}: {
	time?: number;
	loaderready?: boolean;
}) {
	const [animations, setanimation] = useState('');

	useEffect(() => {
		if (time > 0) {
			setTimeout(() => {
				setanimation(' slide-left');
				//@ts-ignore
				document.getElementById('loader').classList.add('slide-left');
			}, time * 1000);
		}

		if (loaderready != undefined) {
			setTimeout(() => {
				setanimation(' slide-left');
				//@ts-ignore
				document.getElementById('loader').classList.add('slide-left');
			}, 300);
			//@ts-ignore
		}
	}, [loaderready]);
	return (
		<div id='loader' onAnimationEnd={(e) => e.currentTarget.remove()}>
			<h2>{animations == '' ? 'Loading' : 'Ready'}</h2>
		</div>
	);
}
