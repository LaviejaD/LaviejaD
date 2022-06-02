export default function Translate(leng: string) {
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
	} else {
		return {
			about: {
				title: 'About me',
				aboutme:
					'I am OnlyD, a self-taught programmer, passionate about technology, with a great capacity for adaptation and a great capacity for teamwork. I like to learn new technologies and develop web applications',
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
