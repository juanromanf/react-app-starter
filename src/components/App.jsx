import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

if (module.hot) {
  module.hot.accept();
}

const App = () => (
  <div>
    <h1>Hi!</h1>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

