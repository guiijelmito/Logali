import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginUser from './Components/LoginUser.jsx';
import CreateUser from './Components/CreateUser.jsx';
import Feed from './Components/Feed.jsx';
import Perfil from './Components/Perfil.jsx';

const router = createBrowserRouter([
  {
    path: '/', //pagina home é para logar
    element: <App />,
    children: [
      {
        path: '/',
        element: <LoginUser />
      },
      {
        path: 'CreateUser',
        element: <CreateUser />
      }   
    ]
  },
  {
    path: 'homePage',
    element: <Feed />,
    children: [
      {
        path: ':tag',
        element: <Feed />
      },
      {
        path: ':username',
        element: <Perfil />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
