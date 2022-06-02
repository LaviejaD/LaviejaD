import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export const Selectl = styled.div`
	display: grid;
	align-items: center;
	border: solid 1px black;
	position: absolute;
	with: 100%;
	top: 80%;
	left: 90%;
	background-image: url(${(props) => props.theme.img});
	width: 50px;
	height: 50px;
	background-size: cover;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
`;

export function Selectlenguaje({ userLang }: { userLang: string }) {
	const navegar = useNavigate();
	const pathname = useLocation().pathname;

	const img =
		userLang === 'es'
			? 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/200px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png'
			: 'https://st.depositphotos.com/1141341/2558/i/600/depositphotos_25587499-stock-photo-flag-of-uk.jpg';

	return (
		<Selectl
			theme={{ img }}
			onClick={() => {
				navegar({
					pathname,
					search: `lang=${userLang === 'en' ? 'es ' : 'en'}`,
				});
				window.location.reload();
			}}
		></Selectl>
	);
}
