import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HelloWorlds } from './containers/';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<HelloWorlds />, document.getElementById('root'));

serviceWorker.unregister();
