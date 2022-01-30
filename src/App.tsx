import React from 'react';
import MainSection from './components/MainSection';
import { GlobalStyles } from './globalStyles';
import Header from './components/Header';

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <MainSection />
  </>
);

export default App;
