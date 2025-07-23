import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { ShopPageWrapper } from './pages/ShopPageWrapper';
import './styles/index.css';
import './styles/header.css';
import './styles/homepage.css';
import './styles/footer.css';
import './styles/shoppingPage.css';
// import App from './App.jsx';

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
