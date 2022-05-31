import { useState, useEffect } from 'react';
import axios from 'axios';
import { Loaderanimatins } from '../components/animations/loader';
import transtalate from '../lang/traslate';

export default function Mainpage({ userLang }: { userLang: string }) {
	//@ts-ignore
	const lang = transtalate(userLang);
	const [avatar, updateavatar] = useState('');
	const [loader, setloader] = useState(false);

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
		<div className='aboutcontainer'>
			<Loaderanimatins isLoading={loader} />
			<div>
				<img
					onLoad={() => setloader(false)}
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
	);
}
