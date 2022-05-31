import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

import './App.css';
import transtalate from './lang/traslate';
import HeaderButtons from './components/HeaderButtons';
import Mainpage from './pages/Mainpage';
import { Selectlang } from './components/selectlang/lang';
function App() {
	//@ts-ignore
	const lang = transtalate(userLang);

	return (
		<div className='App'>
			<Selectlang  />
			<header className='headercontainer'>
				<h1>
					<Link to='/skill'>
						<HeaderButtons title={lang?.skill.title} />
					</Link>
					<Link to='/proyect'>
						<HeaderButtons title={lang?.proyect.title} />
					</Link>
					<Link to='/moreabout'>
						<HeaderButtons title={lang?.moreabout.title} />
					</Link>
				</h1>
			</header>
			<Routes>
				<Route path='/' element={<Mainpage userLang={userLang} />} />
				<Route path='/skill' element={<h1>hola2</h1>} />
				<Route path='/proyect' element={<h1>hola3</h1>} />
				<Route path='/moreabout' element={<h1>hola4</h1>} />
			</Routes>
		</div>
	);
}

export default App;
