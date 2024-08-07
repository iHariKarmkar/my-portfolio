
import { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Hero/>
      <Skills/>
    </Fragment>
  );
}

export default App;
