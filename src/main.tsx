import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'normalize.css';

//@ts-ignore
import { Lines } from 'react-preloaders';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<Lines
			color={'#0642f7'}
			background={
				'linear-gradient(0deg, rgba(246,111,8,0.9472163865546218) 0%, rgba(251,62,6,1) 52%, rgba(255,3,98,1) 100%)'
			}
			animation='slide-left'
		/>
	</React.StrictMode>
);
