import './App.css';
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact-me/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
