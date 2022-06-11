import { useState } from 'react';
import { Loaderanimatins } from './components/animations/loader';
import './App.css';
import transtalate from './lang/traslate';
import HeaderButtons from './components/HeaderButtons';
import Aboutpage from './pages/about';
import { Selectlenguaje } from './components/selectlang/lang';
import { useSearchParams } from 'react-router-dom';
import { Skill } from './pages/skill';
function App() {
	const [isloading, setloading] = useState(true);
	const [param] = useSearchParams();

	const [userLang] = useState(param.get('lang') ?? 'en');

	const [langtranslate] = useState(transtalate(userLang));

	return (
		<div className='App'>
			<Selectlenguaje userLang={userLang} />
			<Loaderanimatins loaderready={isloading} />

			<div className='container'>
				<header className='headercontainer'>
					<h1>OnlyD</h1>
					<ul>
						<li>
							<HeaderButtons title={langtranslate?.about.title} />
						</li>
						<li>
							<HeaderButtons
								title={langtranslate?.proyect.title}
							/>
						</li>
						<li>
							<HeaderButtons title={langtranslate?.skill.title} />
						</li>
					</ul>
				</header>
				<Aboutpage setloading={setloading} userLang={userLang} />
			</div>
			<div className='container'>
				<h2>{userLang === 'en' ? 'nothing' : 'nada'}</h2>
			</div>
			<div className='container'>
				<Skill setloading={setloading} lang={userLang} />
			</div>
		</div>
	);
}

export default App;
