// src/routers/routes.tsx
import { createBrowserRouter } from 'react-router-dom';
import BuyerDashboard from '../components/BuyerDashboard';
import SellerDashboard from '../components/SellerDashboard';
import ProductDetail from '../components/Productdetail';
import Cart from '../components/Cart';
import Login from '../components/Login';



const router = createBrowserRouter([
  {
    path: '/',
    element: <BuyerDashboard />,
  },
  {
    path: '/seller',
    element: <SellerDashboard />,
  },
  {
    path: '/cart',
    element: <Cart cart={[]} removeFromCart={function (productId: number): void {
        throw new Error('Function not implemented.');
    } } confirmOrder={function (): void {
        throw new Error('Function not implemented.');
    } } />,
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
