type lenguaje = 'es' | 'en';
export default function Translate(leng: lenguaje) {
	if (leng === 'es') {
		return {
			about: {
				title: 'Sobre mi',
				aboutme:
					'Soy OnlyD un programador autodidacta, apasionado por la tecnología, con una gran capacidad de adaptación y una gran capacidad de trabajo en equipo. Me gusta aprender nuevas tecnologías y desarrollar aplicaciones web',
			},
			moreabout: {
				title: 'Más sobre mi',
			},
			skill: {
				title: 'Habilidades',
			},
			proyect: {
				title: 'Proyectos',
			},
		};
	}

	if (leng === 'en') {
		return {
			about: {
				title: 'About me',
				aboutme:
					'Soy OnlyD un programador autodidacta, apasionado por la tecnología, con una gran capacidad de adaptación y una gran capacidad de trabajo en equipo. Me gusta aprender nuevas tecnologías y desarrollar aplicaciones web',
			},
			moreabout: {
				title: 'More about me',
			},
			skill: {
				title: 'Skill',
			},
			proyect: {
				title: 'Proyects',
			},
		};
	}
}
