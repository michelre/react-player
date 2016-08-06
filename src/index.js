import 'babel-polyfill';
import './style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Player from './components/Player';

ReactDOM.render(<Player name={'foo bar'}/>, document.getElementById('app'));