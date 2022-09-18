import './App.css';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import ContactMe from './components/ContactMe';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<ContactMe />} />
          <Route path='/' exact element={<Home />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path="*" element={<Navigate to ="/not-found" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
