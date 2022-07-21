import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Connect from './components/Connect';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/connect'  element={<Connect/>}/>
        <Route path='/projects'  element={<Projects/>}/>
        <Route path='/services'  element={<Services/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/'  element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
