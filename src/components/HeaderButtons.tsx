import './headerButtons.css';
import styled from 'styled-components';

export default function HeaderButtons({ title = '' }) {
	const Button1 = styled.button`
		border: none;
		background: #be3e01;
		border-radius: 20%;
		width: 200px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		&:hover {
			color: blue;
		}
	`;
	return (
		<div className='headerButtons'>
			<Button1>
				<h2>{title}</h2>
			</Button1>
		</div>
	);
}
