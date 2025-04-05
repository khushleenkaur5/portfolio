import logo from './logo.svg';
import './App.css';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DevSetup from './components/DevSetup';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <h1>Khushleen Kaur's Portfolio</h1>
      <BasicInfo />
      <Work />
      <Skills />
      <Resources />
      <DevSetup />
      <Contact />
    </div>
  );
}

export default App;
