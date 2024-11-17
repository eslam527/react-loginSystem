import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import LogIn from './componants/LogIn/LogIn.jsx';
import Register from './componants/Register/Register.jsx';
import Welcom from './componants/Welcom/Welcom.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './componants/LayOut/LayOut.jsx';
import UserContextProvider from './componants/context/UserContext.jsx';
import '@fortawesome/fontawesome-free'
import ProtectedRoot from './componants/protectRoot.jsx';

export function App() {
  let router = createBrowserRouter([{
    path: '', element: <LayOut />, children: [
      { path: '', element: <Register /> },
      { path: 'logIn', element:<LogIn />},
      { path: 'Welcome', element:<ProtectedRoot><Welcom /></ProtectedRoot>  }
    ]
  }])
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserContextProvider>

    </>
  )
}

export default App
