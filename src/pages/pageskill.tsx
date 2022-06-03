import styled from 'styled-components';
import './skill.css';
//@ts-ignore
import csslogo from '../assets/csslogo.png';
//@ts-ignore
import htmllogo from '../assets/html5.png';
//@ts-ignore
import jslogo from '../assets/javascriptpng.png';

interface levelskill {
	title: string;
	img: string;
	level: {
		en: 'basic' | 'intermediate' | 'advanced' | 'expert';
		es: 'basico' | 'intermedio' | 'avanzado' | 'experto';
	};
}
interface Skillinterface {
	frontend: levelskill[];
	backend: levelskill[];
	database: levelskill[];
}

const skills: Skillinterface = {
	frontend: [
		{
			title: 'HTML',
			img: htmllogo,
			level: {
				en: 'advanced',
				es: 'avanzado',
			},
		},
		{
			title: 'CSS',
			img: csslogo,
			level: {
				en: 'intermediate',
				es: 'avanzado',
			},
		},
		{
			title: 'Javascript',
			img: jslogo,
			level: {
				en: 'advanced',
				es: 'avanzado',
			},
		},
	],
	backend: [],
	database: [],
};

export function Skill({ lang }: { lang: string }) {
	return (
		<>
			<div className='skillgrid'>
				<div className='skillcard'>
					<h1>Frontend</h1>
					<div className='skillcardflex'>
						{skills.frontend.map((item) => (
							<div className='skillcontent'>
								<img
									className='animation-mousehover'
									src={item.img}
									alt={item.title}
								/>
								<h4>{item.title}</h4>
							</div>
						))}
					</div>
				</div>
				<div className='skillcard'>
					<h1>Backend</h1>
					<div className='skillcardflex'>
						{skills.backend.map((item) => (
							<div className='skillcontent'>
								<img
									className='animation-mousehover'
									src={item.img}
									alt={item.title}
								/>
								<h4>{item.title}</h4>
							</div>
						))}
					</div>
				</div>
				<div className='skillcard'>
					<h1>Frontend</h1>
					<div className='skillcardflex'>
						{skills.database.map((item) => (
							<div className='skillcontent'>
								<img
									className='animation-mousehover'
									src={item.img}
									alt={item.title}
								/>
								<h4>{item.title}</h4>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
