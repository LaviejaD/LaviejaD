import { useState, useEffect } from 'react';
import axios from 'axios';
import transtalate from '../lang/traslate';

export default function Mainpage({ userLang }: { userLang: string }) {
	const lang = transtalate(userLang);
	const [avatar, updateavatar] = useState('');

	useEffect(() => {
		(async () => {
			const res: any = await axios({
				url: 'https://api.github.com/users/LaviejaD',
				method: 'get',
			}).catch((err) => {
				console.log(err);
			});

			updateavatar(res.data.avatar_url);
		})();
	}, []);

	return (
		<div className='aboutcontainer'>
			<div>
				<img id='avatar' src={avatar} alt='avatar' />
			</div>
			<div id='info'>
				<h2>{lang?.about.title}</h2>
				<p> {lang?.about.aboutme}</p>
			</div>
		</div>
	);
}
