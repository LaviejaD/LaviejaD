import { useState } from 'react';
import styled from 'styled-components';

export function Selectlang({ lang }: { lang: any }) {
	//	const [showmodal, setmodal] = useState(false);

	const imgxd =
		localStorage.getItem('lang') === 'es'
			? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/200px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png'
			: 'https://st.depositphotos.com/1141341/2558/i/600/depositphotos_25587499-stock-photo-flag-of-uk.jpg';
	const Selectl = styled.div`
		display: grid;
		align-items: center;
		border: solid 1px black;
		position: absolute;
		with: 100%;
		top: 80%;
		left: 90%;
		background-image: url(${imgxd});
		width: 50px;
		height: 50px;
		background-size: cover;
		-moz-border-radius: 50%;
		-webkit-border-radius: 50%;
		border-radius: 50%;
	`;
	const Modal = styled.div`
		align-items: center;
		position: absolute;
		width: 500px;
		heidth: 500px;
		background-color: #f1f1f1;
		top: 30%;
		left: 30%;
	`;

	return (
		<div>
			<Modal>
				<button
					onClick={() => {
						localStorage.setItem('lang', 'en');
					}}
				>
					en
				</button>
				<button
					onClick={() => {
						localStorage.setItem('lang', 'es');
					}}
				>
					es
				</button>
			</Modal>
			<Selectl>adsasd</Selectl>
		</div>
	);
}
