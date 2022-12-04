import Landing from './pages/landing'
import AboutMe from './pages/aboutMe'
import Projects from './pages/projects'
import ContactForm from './pages/contactForm'
import { Route, Routes } from 'react-router-dom';

import style from './assets/styles/style.css'


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Landing />}
      ></Route>
      <Route
        path="/about-me"
        element={<AboutMe />}
      ></Route>
      <Route 
        path="/projects"
        element={<Projects />}
      ></Route>
      <Route
        path="/contact"
        element={<ContactForm />}
      ></Route>
    </Routes>
  );
}

export default App;
