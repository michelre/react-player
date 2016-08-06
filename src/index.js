import 'babel-polyfill';
import './app/style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Player from './app/containers/player';

ReactDOM.render(
  <Player/>,
  document.getElementById('app')
);