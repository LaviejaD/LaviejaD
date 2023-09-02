import prueba from '../assets/prueba.png';
export function CardProyect({ userlang }: { userlang: string }) {
	return (
		<div className='cardproyect'>
			<br />
			<img src={prueba} alt='' className='cardproyectimg' />
			<div className='containerproyectbutton'>
				<button className='proyectbutton'>
					{userlang === 'es' ? 'Prueba' : 'Demo'}
				</button>
				<button className='proyectbutton'>
					{userlang === 'es' ? 'Repositorio' : 'Repository'}
				</button>
			</div>
			<br />
		</div>
	);
}
