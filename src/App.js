import './App.css';
import { Link, animateScroll as scroll } from 'react-scroll'
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact-me/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects id="projects"/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
