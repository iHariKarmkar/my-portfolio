
import { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
    </Fragment>
  );
}

export default App;
