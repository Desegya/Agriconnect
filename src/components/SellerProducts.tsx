// src/components/SellerProducts.tsx
import {
  Box,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Product } from "./ProductList"; // Import the Product interface

interface SellerProductsProps {
  products: Product[];
  onEdit: (product: Product) => void; // Prop to handle editing
}

const SellerProducts = ({ products, onEdit }: SellerProductsProps) => {
  return (
    <Stack spacing={4}>
      {products.map((product) => (
        <Box
          key={product.id}
          p={4}
          borderWidth={1}
          borderRadius="md"
          boxShadow="md"
        >
          <Text fontSize="xl" fontWeight="bold">
            {product.name}
          </Text>
          <Text>{product.description}</Text>
          <Button onClick={() => onEdit(product)} mt={2}>
            Edit
          </Button>
        </Box>
      ))}
    </Stack>
  );
};

export default SellerProducts;
