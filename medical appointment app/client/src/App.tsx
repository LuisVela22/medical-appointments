// import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/haeder/Header';
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Footer from './components/Footer';
import Cuerpo from './components/cuerpo/Cuerpo';


interface Link {
  name: string;
  url: string;
}

function App() {
  
  const location = useLocation();

  const homeLinks = [
    { name: 'Home', url: '/'},
    { name: 'Login', url: '/login'},
    { name: 'Registrar', url: '/register'},
  ];
  
  
  const loginLinks = [
    { name: 'Home', url: '/'},
    { name: 'Registrar', url: '/register'},
  ];

  const registerLinks = [
    { name: 'Home', url: '/'},
    { name: 'Login', url: '/login'},
    
  ];


  const routeLinks: { [key: string]: Link[] }  = {
    '/login': loginLinks,
    '/register': registerLinks,
    '/home': homeLinks, 
  }
  const links = routeLinks[location.pathname] || homeLinks;


  return (
    <>
      <Header links={links}/>
      <div id='root-content'>
      <Routes>
        <Route path='/' element={<Cuerpo />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='register' element={<Register />}/>
      </Routes>
      {/* <Cuerpo   /> */}
      </div>
      
      <Footer />
    </>
  )
}

export default App
