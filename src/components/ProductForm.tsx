// src/components/ProductForm.tsx
import React, { useState, useEffect } from "react";
import { Box, Button, Input, FormLabel, Textarea } from "@chakra-ui/react";
import { Product } from "./ProductList"; // Import Product interface

const ProductForm = ({
  onSubmit,
  initialProduct,
}: {
  onSubmit: (product: Product) => void; // Function to handle form submission
  initialProduct: Product | null; // Product to edit, if any
}) => {
  const [product, setProduct] = useState<Product>({
    id: Date.now(), // Generate unique ID for new products
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct); // Populate form with product data for editing
    }
  }, [initialProduct]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value, // Parse price as a number
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product); // Call the onSubmit function with the product data
    setProduct({
      id: Date.now(),
      name: "",
      price: 0,
      description: "",
      image: "",
    }); // Reset form after submission
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb="4">
      <FormLabel>Name</FormLabel>
      <Input
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
      />
      <FormLabel mt="4">Price</FormLabel>
      <Input
        name="price"
        type="number"
        value={product.price}
        onChange={handleChange}
        placeholder="Product Price"
        required
      />
      <FormLabel mt="4">Description</FormLabel>
      <Textarea
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Product Description"
        required
      />
      <FormLabel mt="4">Image URL</FormLabel>
      <Input
        name="image"
        value={product.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <Button colorScheme="teal" mt="4" type="submit">
        {initialProduct ? "Update Product" : "Add Product"}
      </Button>
    </Box>
  );
};

export default ProductForm;
