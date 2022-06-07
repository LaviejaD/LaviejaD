import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'normalize.css';
import './animaciones.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter basename='/LaviejaD'>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
