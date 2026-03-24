import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About';
import NotFound from './pages/NotFound';
import Products from './pages/Products';


function App() {

  return (
    <>
      
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
