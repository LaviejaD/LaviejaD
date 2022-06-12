import { useState } from 'react';
import { Loaderanimatins } from './components/animations/loader';
import './App.css';
import transtalate from './lang/traslate';
import HeaderButtons from './components/HeaderButtons';
import Aboutpage from './sections/about';
import { Selectlenguaje } from './components/selectlang/lang';
import { useSearchParams } from 'react-router-dom';
import { Skill } from './sections/skill';
function App() {
	const [isloading, setloading] = useState(true);
	const [param] = useSearchParams();

	const [userLang] = useState(param.get('lang') ?? 'en');

	const [langtranslate] = useState(transtalate(userLang));

	return (
		<div className='App'>
			<Selectlenguaje userLang={userLang} />
			<Loaderanimatins loaderready={isloading} />
			<header className='headercontainer'>
				<h1>OnlyD</h1>
				<ul>
					<li>
						<a href='#about'>
							<HeaderButtons title={langtranslate?.about.title} />
						</a>
					</li>
					<li>
						<a href='#proyect'>
							<HeaderButtons
								title={langtranslate?.proyect.title}
							/>
						</a>
					</li>
					<li>
						<a href='#skill'>
							<HeaderButtons title={langtranslate?.skill.title} />
						</a>
					</li>
					<li>
						<a href='#contact'>
							<HeaderButtons
								title={langtranslate?.contact.title}
							/>
						</a>
					</li>
				</ul>
			</header>
			<div className='container' id='about'>
				<Aboutpage setloading={setloading} userLang={userLang} />
			</div>
			<div className='container' id='proyect'>
				<h2>{userLang === 'en' ? 'proyect' : 'proyectos'}</h2>
			</div>
			<div className='container' id='skill'>
				<Skill setloading={setloading} lang={userLang} />
			</div>
			<div className='container' id='contact'>
				<h2>{userLang === 'en' ? 'contact me' : 'contactame'}</h2>
			</div>
		</div>
	);
}

export default App;
