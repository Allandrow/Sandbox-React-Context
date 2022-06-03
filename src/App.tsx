import Root from 'layout/Root';
import Home from 'modules/Home';
import Login from 'modules/Login';
import PrivatePage from 'modules/PrivatePage';
import RequireAuth from 'modules/RequireAuth';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/protected"
          element={
            <RequireAuth>
              <PrivatePage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
