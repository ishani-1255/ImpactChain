import './index.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Header from './components/Header.js'
import Donate from './pages/Donate.js'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header>
      <Routes>
        <Route path ='/Home' element = {<Home/>} />
        <Route path ='/Donate' element = {<Donate/>} />
      </Routes>
      </Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
