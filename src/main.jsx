import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Register from './Pages/Register/Register.jsx'
import Login from './Pages/Login/Login.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"Register",
    element: <Register/>
  },
  {
    path:"Login",
    element:<Login/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
)
