import styled from 'styled-components';

export default function HeaderButtons({ title = '' }) {
	const Button1 = styled.button`
		border: none;
		background: none;
		border-radius: 20%;
		width: 100%;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 40px;
		font-weight: bold;
		&:hover {
			cursor: pointer;
		}
	`;
	return (
		<div className='headerButtons'>
			<Button1>{title}</Button1>
		</div>
	);
}
