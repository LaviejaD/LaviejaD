import { useState, useEffect } from 'react';
import { Loaderanimatins } from './components/animations/loader';
import { useLocation } from 'react-router-dom';
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

	const [userLang, setLang] = useState(param.get('lang') ?? 'en');
	const location = useLocation();
	const [langtranslate, settraslate] = useState(transtalate(userLang));

	useEffect(() => {
		setLang(param.get('lang') ?? 'en');
		console.log(userLang);
		settraslate(transtalate(userLang));
		console.log(langtranslate);
	}, [location]);
	if (param.get('lang') === null) {
		return (
			<>
				<Selectlenguaje userLang={userLang} />
			</>
		);
	}
	return (
		<div className='App'>
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
			<div
				className='container'
				id='proyect'
				style={{ backgroundColor: '#99DE05' }}
			>
				<h2>{userLang === 'en' ? 'proyect' : 'proyectos'}</h2>
			</div>
			<div
				className='container'
				id='skill'
				style={{ backgroundColor: '#DE0599' }}
			>
				<Skill setloading={setloading} lang={userLang} />
			</div>
			<div
				className='container'
				id='contact'
				style={{ backgroundColor: '#DE4A05' }}
			>
				<h2>{userLang === 'en' ? 'contact me' : 'contactame'}</h2>
			</div>
		</div>
	);
}

export default App;
