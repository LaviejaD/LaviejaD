import { useState } from 'react';
import { Link, Routes, Route, useSearchParams } from 'react-router-dom';
import { Loaderanimatins } from './components/animations/loader';
import './App.css';
import transtalate from './lang/traslate';
import HeaderButtons from './components/HeaderButtons';
import Aboutpage from './pages/about';
import { Selectlenguaje } from './components/selectlang/lang';

import { Skill } from './pages/skill';
function App() {
	const [isloading, setloading] = useState(true);
	const [seach] = useSearchParams();
	//@ts-ignore
	const [userLang] = useState(seach.get('lang') ?? 'en');

	const [langtranslate] = useState(transtalate(userLang));

	return (
		<div className='App'>
			<Selectlenguaje userLang={userLang} />
			<Loaderanimatins loaderready={isloading} />
			<header className='headercontainer'>
				<h1>
					<Link to={`/skill?lang=${userLang}`}>
						<HeaderButtons title={langtranslate?.skill.title} />
					</Link>
					<Link to={`/proyect?lang=${userLang}`}>
						<HeaderButtons title={langtranslate?.proyect.title} />
					</Link>
					<Link to={`/about?lang=${userLang}`}>
						<HeaderButtons title={langtranslate?.about.title} />
					</Link>
				</h1>
				<br />
			</header>
			<Routes>
				<Route
					path='/'
					element={
						<Aboutpage
							setloading={setloading}
							userLang={userLang}
						/>
					}
				/>
				<Route
					path='/about'
					element={
						<Aboutpage
							setloading={setloading}
							userLang={userLang}
						/>
					}
				/>
				<Route
					path='skill'
					element={<Skill setloading={setloading} lang={userLang} />}
				/>
				<Route path='proyect' element={<h1>en progreso</h1>} />
			</Routes>
		</div>
	);
}

export default App;
