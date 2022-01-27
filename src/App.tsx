import React from 'react';
import './App.scss';
import ClassComponent from './components/ClassComponent';
import Main from './components/Main/Main';

const App = () => (
  <div className="App">
    <header className="App-header">
      App Component
      <Main />
      {/* <ClassComponent /> */}
    </header>
  </div>
);

export default App;
