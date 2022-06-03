import { ReactNode, useState, useMemo } from 'react';
import AuthContext from 'context/AuthContext';

interface ProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: ProviderProps) {
  const [userName, setUserName] = useState<string | null>(null);

  const signin = (newUserName: string, callback: VoidFunction) => {
    setUserName(newUserName);
    callback();
  };

  const signout = () => setUserName(null);

  const value = useMemo(() => ({ userName, signin, signout }), [userName]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
