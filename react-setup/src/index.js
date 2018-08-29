import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello.jsx'
import './scss/hello.scss';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(<Hello/>,
  document.getElementById('app')
);

module.hot.accept();