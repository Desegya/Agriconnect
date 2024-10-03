// src/routers/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import BuyerDashboard from '../components/BuyerDashboard';
import SellerDashboard from '../components/SellerDashboard';
import ProductDetail from '../components/Productdetail';
import Login from '../components/Login';
import Account from '../components/Account';



const router = createBrowserRouter([
  {
    path: '/',
    element: <BuyerDashboard />,
  },
  {
    path: "/account", // Define the route for the account page
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
