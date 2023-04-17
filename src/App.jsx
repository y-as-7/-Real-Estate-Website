import { Header } from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/value";
import Contact from "./components/Contact/Contact";
import './App.css'
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
      <Header />
      <Hero />
    </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      </div>
  );
}

export default App;
