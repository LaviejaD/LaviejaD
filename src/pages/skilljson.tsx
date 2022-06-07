interface levelskill {
	title: string;
	img: string;
}
interface Skillinterface {
	frontend: levelskill[];
	backend: levelskill[];
	database: levelskill[];
}
import { logo } from '../utils/logo';
export const skills: Skillinterface = {
	frontend: [
		{
			title: 'HTML',
			img: logo('html5.png'),
		},
		{
			title: 'CSS',
			img: logo('csslogo.png'),
		},
		{
			title: 'Javascript',
			img: logo('javascript.png'),
		},
		{
			title: 'React',
			img: logo('react.png'),
		},
	],
	backend: [
		{
			title: 'NodeJS',
			img: logo('nodejs.png'),
		},
		{
			title: 'rust',
			img: logo('rust.png'),
		},
		{
			title: 'python',
			img: logo('python.png'),
		},
		{
			title: 'php',
			img: logo('php.png'),
		},
	],
	database: [
		{ title: 'MongoDB', img: logo('mongodb.png') },
		{
			title: 'mysql',
			img: logo('mysql.png'),
		},
	],
};
