import useAuth from 'hooks/useAuth';

function PrivatePage() {
  const { userName } = useAuth();
  return (
    <main>
      <h1>Bienvenue {userName} </h1>
    </main>
  );
}

export default PrivatePage;
