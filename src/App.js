import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Resume from './component/Resume';
import Skills from './component/Skills';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './component/About';
import Services from './component/Services';
import Contact from './component/contact';
import Projects from './component/Projects';
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='resume' element={<Resume />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
