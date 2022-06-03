import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

interface RequireAuthProps {
  children: JSX.Element;
}

function RequireAuth({ children }: RequireAuthProps) {
  const auth = useAuth();

  if (!auth.userName) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RequireAuth;
