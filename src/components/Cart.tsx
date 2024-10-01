// src/components/Cart.tsx
import { Box, Text, Button, Stack, Flex, Image } from "@chakra-ui/react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string; // Added image property for displaying product image
}

const Cart = ({
  cart,
  removeFromCart,
  confirmOrder,
}: {
  cart: Product[];
  removeFromCart: (productId: number) => void;
  confirmOrder: () => void;
}) => {
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <Box p="5" borderWidth="1px" borderRadius="md" marginX={5}>
      <Text fontSize="xl" mb="4">
        Your Cart
      </Text>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Stack spacing="4">
          {cart.map((product) => (
            <Flex key={product.id} justifyContent="space-between" alignItems="center">
              <Flex alignItems="center">
                <Image
                  src={product.image} // Use actual product image URL here
                  alt={product.name}
                  boxSize="50px" // Adjust image size as needed
                  objectFit="cover"
                  borderRadius="md"
                  mr="4"
                />
                <Text>
                  {product.name} - ₦{product.price}
                </Text>
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
      <Text fontWeight="bold" mt="4">
        Total: ₦{totalPrice}
      </Text>
      {cart.length > 0 && (
        <Button colorScheme="teal" mt="4" onClick={confirmOrder}>
          Confirm Order
        </Button>
      )}
    </Box>
  );
};

export default Cart;
