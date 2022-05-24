import './aboutcards.css';
export default function AboutCards({ title = '', description = '' }) {
	return (
		<div className='cards1'>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}
