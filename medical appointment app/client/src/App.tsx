// import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/haeder/Header';
// import Login from './pages/Login';
// import Home from './pages/Home';
import Footer from './components/Footer';
import Cuerpo from './components/cuerpo/Cuerpo';
import Form from './components/form/Form';
// import { Placeholder } from 'react-bootstrap';


interface Link {
  name: string;
  url: string;
}

function App() {
  const location = useLocation();

  const loginInputs = [
    { name: 'username', type: 'text', label: 'Username', placeholder: 'Nombre'},
    { name: 'password', type: 'text', label: 'Password', placeholder: 'Password'}
  ];

  const registerInputs = [
    { name: 'name', type: 'text', label: 'Name', placeholder: 'Nombre'},
    { name: 'lastName', type: 'text', label: 'Last Name', placeholder: 'Apellido'},
    { name: 'username', type: 'text', label: 'Username', placeholder: 'Username'},
    { name: 'password', type: 'text', label: 'Password', placeholder: 'Password'},
    { name: 'email', type: 'text', label: 'Email', placeholder: 'Ej: nombre@dominio.com'},
    { name: 'birthdate', type: 'date', label: 'Date Birth', placeholder: 'Birth'}
  ];


  const homeLinks = [
    { name: 'Home', url: '/' },
    { name: 'Login', url: '/login' },
    { name: 'Registrar', url: '/register' },
  ];


  const loginLinks = [
    { name: 'Home', url: '/' },
    { name: 'Registrar', url: '/register' },
  ];

  const registerLinks = [
    { name: 'Home', url: '/' },
    { name: 'Login', url: '/login' },

  ];


  const routeLinks: { [key: string]: Link[] } = {
    '/login': loginLinks,
    '/register': registerLinks,
    '/home': homeLinks,
  }
  const links = routeLinks[location.pathname] || homeLinks;


  return (
    <>
      <Header links={links} />
      <div id='root-content'>
        <Routes>
          <Route path='/' element={<Cuerpo />} />
          <Route path='/login' element={<Form inputs={loginInputs} boxHeight="460px" header='Bienvenido Usuario'/>} />
          <Route path='register' element={<Form inputs={registerInputs} boxHeight="910px" header='Bienvenido al registro'/>} />
        </Routes>
        {/* <Cuerpo   /> */}
      </div>

      <Footer />
    </>
  )
}

export default App
