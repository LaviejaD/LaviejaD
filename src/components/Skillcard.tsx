interface levelskill {
	title: string;
	img: string;
}
import { useId } from 'react';

export function Skillcard({ skills }: { skills: levelskill[] }) {
	return (
		<div className='skillcard'>
			<div className='skillcardflex'>
				{skills.map((item) => (
					<div key={useId()} className='skillcontent'>
						<img
							className='animation-mousehover'
							src={item.img}
							alt={item.title}
						/>
						<h2>{item.title}</h2>
					</div>
				))}
			</div>
		</div>
	);
}
