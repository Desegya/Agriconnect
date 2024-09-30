// src/components/OrderConfirmation.tsx
import { Box, Text, Button } from "@chakra-ui/react";

const OrderConfirmation = ({ finishOrder }: { finishOrder: () => void }) => {
  return (
    <Box p="5" textAlign="center">
      <Text fontSize="2xl" mb="4">
        Thank you for your order!
      </Text>
      <Text mb="4">Your payment has been confirmed.</Text>
      <Button colorScheme="teal" onClick={finishOrder}>
        Back to Products
      </Button>
    </Box>
  );
};

export default OrderConfirmation;
