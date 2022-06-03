import useAuth from 'hooks/useAuth';
import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState('');
  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    signin(userName, () => {
      navigate('/protected');
    });
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Your userName"
        onChange={(e) => setUserName(e.currentTarget.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Sign in
      </button>
    </form>
  );
}

export default Login;
