import React from 'react';
import ReactDOM from 'react-dom';
import App from './_app/App';
import * as serviceWorker from './serviceWorker';
import 'react-notifications-component/dist/scss/notification.scss';
import 'animate.css/animate.min.css';
import './_css/style.scss';
import './_css/basscss.min.css';
import './_helpers/service';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
