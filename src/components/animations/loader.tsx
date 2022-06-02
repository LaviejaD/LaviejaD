import style from 'styled-components';
import { useState } from 'react';
const Loader = style.div`
	 position: absolute;
	  background: linear-gradient(0deg, rgba(246,111,8,0.9472163865546218) 0%, rgba(251,62,6,1) 52%, rgba(255,3,98,1) 100%);
	   width: 100%; 
	   height: 100%;
	    top: 0;
		 left: 0;
		 z-index: 1;
		 
		 animation:  ${(e) => e.theme.animations} 1s;`;

export function Loaderanimatins({ time }: { time: number }) {
	const [animations, setanimation] = useState('');

	setTimeout(() => setanimation('slide-left'), time * 1000);
	return (
		<Loader
			theme={{ animations }}
			onAnimationEnd={(e) => e.currentTarget.remove()}
		>
			<div className='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<br />
			<h2>{animations != '' ? 'Loading' : 'Ready'}</h2>
		</Loader>
	);
}
