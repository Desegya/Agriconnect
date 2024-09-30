// src/components/BuyerDashboard.tsx
import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import OrderConfirmation from "./OrderConfirmation";

interface Product {
  id: number;
  name: string;
  price: number;
}

const BuyerDashboard = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

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
    <div>
      {!orderConfirmed ? (
        <>
          <ProductList addToCart={addToCart} />
          {cart.length > 0 && (
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              confirmOrder={confirmOrder}
            />
          )}
        </>
      ) : (
        <OrderConfirmation finishOrder={finishOrder} />
      )}
    </div>
  );
};

export default BuyerDashboard;
