import { useState } from 'react';

export function Selectlenguaje({ userLang }: { userLang: string }) {
	//`lang=${userLang === 'en' ? 'es ' : 'en'}`
	let [img] = useState(
		userLang === 'es'
			? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/200px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png'
			: 'https://st.depositphotos.com/1141341/2558/i/600/depositphotos_25587499-stock-photo-flag-of-uk.jpg'
	);

	return (
		<button
			className='buttonlang'
			style={{
				backgroundImage: `url(${img})`,
			}}
			onClickCapture={(e) => {
				window.location.href = `${window.location.origin}?lang=${
					userLang === 'en' ? 'es ' : 'en'
				}`;
			}}
		></button>
	);
}
