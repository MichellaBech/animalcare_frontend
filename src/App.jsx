
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import './App.css'
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import facade from './util/apiFacade';
import { useState } from 'react';
import LogIn from './components/LogIn';
import VetClinicsPage from './pages/VetClinicsPage';

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => { /*TODO*/
    facade.logout()
setLoggedIn(false)
   } 

  const login = (user, pass) => {/*TODO*/
    facade.login(user,pass)
    .then(() =>setLoggedIn(true));
    console.log(user, pass);
  } 

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout loggedIn={loggedIn} login={login} logout={logout} />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<LogIn login={login} />} />
        <Route path="/veterinaryclinics" element={<VetClinicsPage/>} />
        <Route path="/admin" element={<Admin/>} />
      </Route>
    </>
  )
);

return (
  <>
    <RouterProvider router={router} />
  </>
);
};

export default App
