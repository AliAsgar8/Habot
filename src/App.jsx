import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Main from './component/Main';
import Service from './component/Service';
import Footer from './component/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Main/>
      <About/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default App
