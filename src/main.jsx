import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './pages/routes';
import { CartContextProvider } from './context/Cart';
import './styles/variables.css';
import './styles/pageRouting.css';
import './styles/buttons.css';
import './styles/index.css';
import './styles/header.css';
import './styles/homepage.css';
import './styles/footer.css';
import './styles/shoppingPage.css';
import './styles/myCart.css';
// import App from './App.jsx';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </StrictMode>,
)
