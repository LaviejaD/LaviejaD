import { useState } from 'react';
import { Link, Routes, Route, useSearchParams } from 'react-router-dom';

import './App.css';
import transtalate from './lang/traslate';
import HeaderButtons from './components/HeaderButtons';
import Mainpage from './pages/Mainpage';
import { Selectlenguaje } from './components/selectlang/lang';
import { Loaderanimatins } from './components/animations/loader';

function App() {
	const [seach] = useSearchParams();
	//@ts-ignore
	const [userLang, setlang] = useState(seach.get('lang') ?? 'en');

	const [langtranslate, updatetranstalate] = useState(transtalate(userLang));
	const cambio = () => {
		setlang(userLang === 'en' ? 'es ' : 'en');
		updatetranstalate(transtalate(userLang));
	};
	return (
		<div className='App'>
			<Loaderanimatins time={1} />
			<Selectlenguaje userLang={userLang} />
			<header className='headercontainer'>
				<h1>
					<Link to={`/skill?lang=${userLang}`}>
						<HeaderButtons title={langtranslate?.skill.title} />
					</Link>
					<Link to={`/proyect?lang=${userLang}`}>
						<HeaderButtons title={langtranslate?.proyect.title} />
					</Link>
					<Link to={`/moreabout?lang=${userLang}`}>
						<HeaderButtons title={langtranslate?.moreabout.title} />
					</Link>
				</h1>
			</header>
			<Routes>
				<Route path='/' element={<Mainpage userLang={userLang} />} />
				<Route path='skill' element={<h1>skill</h1>} />
				<Route path='proyect' element={<h1>proyect</h1>} />
				<Route path='moreabout' element={<h1>moreabout</h1>} />
			</Routes>
		</div>
	);
}

export default App;
