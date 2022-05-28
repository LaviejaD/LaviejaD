import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import transtalate from './lang/traslate';
import HeaderButtons from './components/HeaderButtons';
function App() {
	const [userLang] = useState('es');

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
				<header>
					<h1>
						<div className='headercontainer'>
							<HeaderButtons
								title={lang?.skill.title}
							></HeaderButtons>
							<HeaderButtons
								title={lang?.proyect.title}
							></HeaderButtons>
							<HeaderButtons
								title={lang?.skill.title}
							></HeaderButtons>
							<HeaderButtons
								title={lang?.moreabout?.title}
							></HeaderButtons>
						</div>
					</h1>
				</header>

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
			</div>
		</div>
	);
}

export default App;
