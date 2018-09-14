import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'weathericons/css/weather-icons.css';
import 'weathericons/css/weather-icons-wind.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
