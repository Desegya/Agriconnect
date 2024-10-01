// src/components/ProductDetail.tsx
import React from "react";
import { Box, Image, Text, Button, Flex } from "@chakra-ui/react";

// Define the Product interface for props
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

// Sample product data (you can replace this with actual data later)
const sampleProduct: Product = {
    id: 28,
    name: "Appetizer - Asian Shrimp Roll",
    price: 97,
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "http://dummyimage.com/171x100.png/5fa2dd/ffffff",
};

// Arrow function component for Product Detail
const ProductDetail = () => {
  return (
    <Box p="5">
      {/* Product Detail Display */}
      <Flex direction={{ base: "column", md: "row" }} gap={6} mb="8">
        <Image
          src={sampleProduct.image}
          alt={sampleProduct.name}
          boxSize="300px"
          objectFit="cover"
        />
        <Box>
          <Text fontSize="3xl" fontWeight="bold">
            {sampleProduct.name}
          </Text>
          <Text fontSize="2xl" color="teal.500">
            ₦{sampleProduct.price}
          </Text>
          <Text mt="4">{sampleProduct.description}</Text>

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
