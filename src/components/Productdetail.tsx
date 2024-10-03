import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { products } from "../data/products"; // Assuming you have a products array

// Define the Product interface for props
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

// Arrow function component for Product Detail
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL
  const productId = parseInt(id!); // Convert ID to number (ensure it's not null)

  // Find the product by ID
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    return <Text>Product not found</Text>; // Handle case where product doesn't exist
  }

  return (
    <Box p="5">
      {/* Product Detail Display */}
      <Flex direction={{ base: "column", md: "row" }} gap={6} mb="8">
        <Image
          src={product.image}
          alt={product.name}
          boxSize="300px"
          objectFit="cover"
        />
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            {product.name}
          </Text>
          <Text fontSize="2xl" color="teal.500">
            ₦{product.price}
          </Text>
          <Text mt="4">{product.description}</Text>

          {/* Add to Cart Button */}
          <Button colorScheme="teal" mt="4">
            Add to Cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductDetail;
