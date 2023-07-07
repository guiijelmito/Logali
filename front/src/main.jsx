import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import LoginUser from './Components/LoginUser.jsx';
import CreateUser from './Components/CreateUser.jsx';
import Feed from './Components/Feed.jsx';

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
    element: <Feed />
  },
  {
    path: 'homePage/:tag',
    element: <Feed />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
