import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from './pages/home';
import Product from './pages/project';
// import Header from './components/Header';  
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/project" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
