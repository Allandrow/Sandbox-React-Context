import useAuth from 'hooks/useAuth';
import { Link, Outlet } from 'react-router-dom';

function Root() {
  const { userName } = useAuth();

  return (
    <>
      <header>
        <Link to="/">Back to Home</Link> -{' '}
        <Link to="/protected">{userName ?? 'Not connected'}</Link>
      </header>

      <Outlet />

      <footer>
        <p>Ici c'est le footer</p>
      </footer>
    </>
  );
}

export default Root;
