// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <div className='col inline'>
    <h1 className='bg-primary'>Brandons porfolio</h1>
      <Nav />
      <main className="col mx-3">
        <Outlet />
      </main>
      <Footer></Footer>
      </div>
    </>
  );
}

export default App;
