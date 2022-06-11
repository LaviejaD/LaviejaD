import csslogo from '../assets/img/csslogo.png';
import html5 from '../assets/img/html5.png';
import javascript from '../assets/img/javascript.png';
import react from '../assets/img/react.png';
import nodejs from '../assets/img/nodejs.png';
import rust from '../assets/img/rust.png';
import python from '../assets/img/python.png';
import php from '../assets/img/php.png';
import mongodb from '../assets/img/mongodb.png';
import mysql from '../assets/img/mysql.png';

export const logo = (e: string): string => {
	switch (e) {
		case 'html5.png':
			return html5;

		case 'csslogo.png':
			return csslogo;

		case 'javascript.png':
			return javascript;
		case 'react.png':
			return react;
		case 'nodejs.png':
			return nodejs;
		case 'rust.png':
			return rust;
		case 'python.png':
			return python;
		case 'php.png':
			return php;
		case 'mongodb.png':
			return mongodb;
		case 'mysql.png':
			return mysql;
		default:
			return '';
	}
};
