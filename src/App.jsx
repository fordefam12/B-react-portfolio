import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <div className='container-fluid app-container '>
      
      <header className='row app-header bg-danger'>
        <div className='col-md-6'>
          <h1>Brandon's Portfolio</h1>
        </div>
        <div className='col-md-6 d-flex justify-content-end '>
          <Nav />
        </div>
      </header>
      <main className='app-main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

