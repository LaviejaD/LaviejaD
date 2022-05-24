type lenguaje = 'es' | 'en';
export default function Translate(leng: lenguaje) {
	if (leng === 'es') {
		return {
			about: {
				title: 'Sobre mi',
				aboutme:
					'Soy OnlyD un programador autodidacta, apasionado por la tecnología, con una gran capacidad de adaptación y una gran capacidad de trabajo en equipo. Me gusta aprender nuevas tecnologías y desarrollar aplicaciones web',
			},
			skill: {
				title: 'Habilidades',
				description: 'descricions sobre mis habilidades',
			},
			proyect: {
				title: 'Proyectos',
				description: 'descricions sobre mis proyectos',
			},
		};
	}

	if (leng === 'en') {
		return {
			about: {
				title: 'Sobre mi',
				aboutme:
					'Soy OnlyD un programador autodidacta, apasionado por la tecnología, con una gran capacidad de adaptación y una gran capacidad de trabajo en equipo. Me gusta aprender nuevas tecnologías y desarrollar aplicaciones web',
			},
			skill: {
				title: 'Habilidades',
				description: 'descricions sobre mis habilidades',
			},
			proyect: {
				title: 'Proyectos',
				description: 'descricions sobre mis proyectos',
			},
		};
	}
}
