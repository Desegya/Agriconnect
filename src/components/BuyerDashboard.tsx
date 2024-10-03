// src/components/BuyerDashboard.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import ProductList from "./ProductList";
import OrderConfirmation from "./OrderConfirmation";
import { Box, } from "@chakra-ui/react";


interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const BuyerDashboard = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  const confirmOrder = () => {
    setOrderConfirmed(true);
  };

  const finishOrder = () => {
    setCart([]);
    setOrderConfirmed(false);
  };

  return (
    <Box>
    
   

      {!orderConfirmed ? (
        <>
          <ProductList addToCart={addToCart} />
        </>
      ) : (
        <OrderConfirmation finishOrder={finishOrder} />
      )}
    </Box>
  );
};

export default BuyerDashboard;
