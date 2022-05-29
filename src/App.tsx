import { useState } from 'react';

import './App.css';
import transtalate from './lang/traslate';
import HeaderButtons from './components/HeaderButtons';
import Mainpage from './pages/Mainpage';

function App() {
	const [userLang] = useState('es');

	//@ts-ignore
	const lang = transtalate(userLang);

	return (
		<div className='App'>
			<div className='about'>
				<header className='headercontainer'>
					<h1>
						<HeaderButtons title={lang?.skill.title} />
						<HeaderButtons title={lang?.proyect.title} />
						<HeaderButtons title={lang?.moreabout.title} />
					</h1>
				</header>
			</div>
			<Mainpage />
		</div>
	);
}

export default App;
