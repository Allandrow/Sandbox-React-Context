import useAuth from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function PrivatePage() {
  const { userName, signout } = useAuth();
  const navigate = useNavigate();

  const handleSignout = () => {
    signout(() => {
      navigate('/');
    });
  };

  return (
    <main>
      <h1>Bienvenue {userName} </h1>
      <button type="button" onClick={handleSignout}>
        Log out
      </button>
    </main>
  );
}

export default PrivatePage;
