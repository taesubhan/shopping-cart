import { useState } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ShopPageWrapper } from './pages/ShopPageWrapper';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },

  {
    path: 'shop/:category',
    element: <ShopPageWrapper />
  }
])

export default App
