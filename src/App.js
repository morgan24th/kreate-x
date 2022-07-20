import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/about'  element={<About/>}/>
        <Route path='/'  element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
