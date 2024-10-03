// src/routers/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import BuyerDashboard from '../components/BuyerDashboard';
import SellerDashboard from '../components/SellerDashboard';
import ProductDetail from '../components/ProductDetail';
import Login from '../components/Login';
import Account from '../components/Account';
import Cart from '../components/Cart';



const router = createBrowserRouter([
  {
    path: '/',
    element: <BuyerDashboard />,
  },
  {
    path: "/account", 
    element: <Account />,
  },

  {
    path: '/seller',
    element: <SellerDashboard />,
  },
  {
    path: '/product/:id',
    element: <ProductDetail />,
  },
  {
    path: "/login",
    element: <Login />, // Ensure this is defined
  },
]);

export default router;
