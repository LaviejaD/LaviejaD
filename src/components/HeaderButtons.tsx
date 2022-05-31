import styled from 'styled-components';

export default function HeaderButtons({ title = '' }) {
	const Button1 = styled.button`
		border: none;
		background: none;
		border-radius: 20%;
		width: 200px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		&:hover {
			cursor: pointer;
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
