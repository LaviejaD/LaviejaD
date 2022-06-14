import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Selectlenguaje({ userLang }: { userLang: string }) {
	//`lang=${userLang === 'en' ? 'es ' : 'en'}`
	const navigate = useNavigate();
	let [img, setimg] = useState(
		userLang === 'es'
			? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/200px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png'
			: 'https://st.depositphotos.com/1141341/2558/i/600/depositphotos_25587499-stock-photo-flag-of-uk.jpg'
	);

	//navigate(`?lang=${userLang === 'en' ? 'es ' : 'en'}`);

	const funclang = (e: 'en' | 'es') => {
		navigate(`?lang=${e}`);
	};

	return (
		<div className='selectlang'>
			<div id='selectlangdiv'>
				<h1>Select your language...</h1>
				<h2>
					<button
						className='buttonlang'
						onClickCapture={() => funclang('en')}
					>
						{'English '}
					</button>
				</h2>
				<h2>
					<button
						className='buttonlang'
						onClickCapture={() => funclang('es')}
					>
						Spanish
					</button>
				</h2>
			</div>
		</div>
	);
}
