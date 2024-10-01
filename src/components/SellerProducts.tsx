// src/components/SellerProducts.tsx
import React, { useState } from "react";
import { Box, Text, Button, Grid, GridItem, Flex, Image } from "@chakra-ui/react";
import ProductForm from "./ProductForm"; // Import ProductForm for adding/updating products
import { Product } from "./ProductList"; // Import Product interface

const SellerProducts = () => {
  const [sellerProducts, setSellerProducts] = useState<Product[]>([]); // State for seller's products
  const [editingProduct, setEditingProduct] = useState<Product | null>(null); // Track which product is being edited

  // Function to add a new product
  const addProduct = (newProduct: Product) => {
    setSellerProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Function to update an existing product
  const updateProduct = (updatedProduct: Product) => {
    setSellerProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setEditingProduct(null); // Reset editing state after update
  };

  // Function to remove a product
  const removeProduct = (productId: number) => {
    setSellerProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <Box p="5">
      <Text fontSize="2xl" mb="4">Manage Your Products</Text>
      <ProductForm 
        onSubmit={editingProduct ? updateProduct : addProduct} // Use update or add based on editing state
        initialProduct={editingProduct} // Pass the product to edit, if any
      />
      <Text fontSize="xl" mt="8" mb="4">Your Products</Text>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {sellerProducts.map((product) => (
          <GridItem
            display="flex"
            flexDirection="column"
            key={product.id}
            borderWidth="1px"
            p="4"
            borderRadius="md"
            boxShadow="md"
          >
            <Image
              src={product.image}
              alt={product.name}
              boxSize="150px"
              objectFit="cover"
              mb="4"
            />
            <Text fontSize="xl" color="teal.500">
              {product.name}
            </Text>
            <Text>Price: ₦{product.price}</Text>
            <Flex mt="auto" justifyContent="space-between">
              <Button colorScheme="teal" onClick={() => setEditingProduct(product)}>
                Edit
              </Button>
              <Button colorScheme="red" onClick={() => removeProduct(product.id)}>
                Remove
              </Button>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default SellerProducts;
