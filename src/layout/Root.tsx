import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>
        <Link to="/">Back to Home</Link> -{' '}
        <Link to="/protected">My Profile</Link>
      </header>

      <Outlet />

      <footer>
        <p>Ici c'est le footer</p>
      </footer>
    </>
  );
}

export default Root;
