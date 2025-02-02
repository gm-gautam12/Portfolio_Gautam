import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.components';
import Home from './pages/Home.pages';
import About from './pages/About.pages';
import Project from './pages/Project.pages';
import Contact from './pages/Contact.pages';



const App: React.FC = () => {
  return(
    <main className='bg-slate-300/20 h-full'>
      <Router>
       < Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>

    </main>
 
  )
}
export default App;