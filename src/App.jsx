// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
    <div className='inline'>
    <h1 className='bg-primary'>Brandons porfolio</h1>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      </div>
    </>
  );
}

export default App;
