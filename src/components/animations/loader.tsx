import style from 'styled-components';

export function Loaderanimatins({ isLoading }: { isLoading: boolean }) {
	const animations = isLoading ? '' : ' slide-left';
	const Loader = style.div`
	 position: absolute;
	  background: linear-gradient(0deg, rgba(246,111,8,0.9472163865546218) 0%, rgba(251,62,6,1) 52%, rgba(255,3,98,1) 100%);
	   width: 100%; 
	   height: 100%;
	    top: 0;
		 left: 0;
		 z-index: 1;
		 
		 animation:  ${animations} 1s;`;

	return (
		<Loader onAnimationEnd={(e) => e}>
			{isLoading ? (
				''
			) : (
				<div className='lds-ring'>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			)}
			<br />
			<h2>{isLoading ? 'Loading img' : 'Ready'}</h2>
		</Loader>
	);
}
