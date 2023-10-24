import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Pruduct from './Pruduct.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/products/:id',
    element: <Pruduct />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
)
