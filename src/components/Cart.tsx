import { Box, Text, Button, Stack } from "@chakra-ui/react";

interface Product {
  id: number;
  name: string;
  price: number;
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
      <Stack spacing="4">
        {cart.map((product) => (
          <Box key={product.id} display="flex" justifyContent="space-between">
            <Text>
              {product.name} - ₦{product.price}
            </Text>
            <Button
              size="sm"
              colorScheme="red"
              onClick={() => removeFromCart(product.id)}
            >
              Remove
            </Button>
          </Box>
        ))}
      </Stack>
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
