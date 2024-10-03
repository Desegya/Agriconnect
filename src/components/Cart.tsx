// src/components/Cart.tsx
import { Box, Text, Button, Stack, Flex, Image } from "@chakra-ui/react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Props {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Cart = ({ cart, setCart }: Props) => {
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const confirmOrder = () => {
    console.log("Order confirmed:", cart);
  };

  return (
    <Box p="5" borderWidth="1px" borderRadius="md" marginX={5}>
      <Text fontSize="xl" mb="4">Your Cart</Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Stack spacing="4">
          {cart.map((product) => (
            <Flex
              key={product.id}
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex alignItems="center">
                <Image
                  src={product.image}
                  alt={product.name}
                  boxSize="50px"
                  objectFit="cover"
                  borderRadius="md"
                  mr="4"
                />
                <Text>{product.name} - ₦{product.price}</Text>
              </Flex>
              <Button
                size="sm"
                colorScheme="red"
                onClick={() => removeFromCart(product.id)}
              >
                Remove
              </Button>
            </Flex>
          ))}
        </Stack>
      )}
      <Text fontWeight="bold" mt="4">Total: ₦{totalPrice}</Text>
      {cart.length > 0 && (
        <Button colorScheme="teal" mt="4" onClick={confirmOrder}>
          Confirm Order
        </Button>
      )}
    </Box>
  );
};

export default Cart;
