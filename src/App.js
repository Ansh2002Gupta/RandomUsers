import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { createContext, useState } from 'react';
import MoreInfo from './pages/MoreInfo';
import default_image from './assests/images/Group 1572.svg';

export const GlobalContext = createContext()

const router = createBrowserRouter([
    {
      path: '/',
      element: <Login/>,
      //loader:
    },
    {
      path: 'Home',
      element: <Home/>
    },
    {
      path: 'User',
      element: <MoreInfo/>
    }
]);

const App = () => {
  const [loginUserDetails, setLoginUserDetails] = useState([])
  const [modalInfo, setModalInfo] = useState({type: 'profilePhotoModal', display: false, profilePhotoModalInfo: {img: default_image}, userDetailsModalInfo: {img: default_image, firstname: null, lastname: null, gender: null, email: null, address: null, mobile: null, age: null, weight: null, university: null, ssn: null, birthDate: null}});
  return (
    <GlobalContext.Provider value={{loginUserDetails, setLoginUserDetails, modalInfo, setModalInfo}}>
      <RouterProvider router={router}/>
    </GlobalContext.Provider>
  );
}

export default App