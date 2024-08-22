
import { Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
}

export default App;
