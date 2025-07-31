import { HomePage } from './Home';
import { ShopPageWrapper } from './ShopPageWrapper';
import { MyCart } from './MyCart';

const routes = [
    {
      path: '/',
      element: <HomePage />,
    },
  
    {
      path: 'shop/:category',
      element: <ShopPageWrapper />
    },

    {
      path: 'mycart',
      element: <MyCart />
    }
]

export default routes;