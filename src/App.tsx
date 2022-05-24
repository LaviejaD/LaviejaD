import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import transtalate from './lang/traslate';
import AboutCards from './components/aboutcards';

function App() {
	const [userLang, setUserLang] = useState('es');

	//@ts-ignore
	const lang = transtalate(userLang);

	const [avatar, updateavatar] = useState('');
	useEffect(() => {
		axios({ url: 'https://api.github.com/users/LaviejaD', method: 'get' })
			.then((res) => {
				localStorage.setItem('avatar', res.data.avatar_url);
				updateavatar(res.data.avatar_url);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className='App'>
			<div className='about'>
				<div className='aboutcontainer'>
					<div>
						<img
							id='avatar'
							src={localStorage.getItem('avatar') ?? avatar}
							alt='avatar'
						/>
					</div>
					<div id='info'>
						<h2>{lang?.about.title}</h2>
						<p> {lang?.about.aboutme}</p>
					</div>
				</div>
				<div className='cardscontainer'>
					{AboutCards({
						title: lang?.skill.title,
						description: lang?.skill.description,
					})}
					{AboutCards({
						title: lang?.proyect.title,
						description: lang?.proyect.description,
					})}
					{AboutCards({ title: '5', description: '6' })}
				</div>
			</div>
		</div>
	);
}

export default App;
