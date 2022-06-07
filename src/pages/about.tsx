import { useState, useEffect } from 'react';
import axios from 'axios';
import transtalate from '../lang/traslate';

export default function Aboutpage({
	userLang,
	setloading,
}: {
	userLang: string;
	setloading: (loading: boolean) => void;
}) {
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
	//
	return (
		<div
			onLoad={() => {
				setloading(true);
			}}
		>
			<div
				className='aboutcontainer slide-to-center'
				onLoad={(e) =>
					setTimeout(
						() =>
							(e.currentTarget.style.animation =
								'slide-to-center 1s '),
						1000
					)
				}
			>
				<div>
					<img id='avatar' src={avatar} alt='avatar' />
				</div>
				<div id='info'>
					<p> {lang?.about.aboutme}</p>
				</div>
			</div>
		</div>
	);
}
