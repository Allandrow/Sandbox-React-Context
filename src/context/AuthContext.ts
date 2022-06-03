import { createContext } from 'react';

interface AuthContextType {
  userName: string | null;
  signin: (userName: string, callback: VoidFunction) => void;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;
