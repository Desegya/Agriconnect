// src/components/ProductForm.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  FormLabel,
  Textarea,
  Image,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { Product } from "./ProductList"; // Import Product interface
import { useNavigate } from "react-router-dom";

const ProductForm = ({
  onSubmit,
  initialProduct,
}: {
  onSubmit: (product: Product) => void; // Function to handle form submission
  initialProduct: Product | null; // Product to edit, if any
}) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>({
    id: Date.now(), // Generate unique ID for new products
    name: "",
    price: 0,
    description: "",
    image: "", // Initialize image as an empty string
  });

  const [imageFile, setImageFile] = useState<File | null>(null); // State to store uploaded image
  const [imagePreview, setImagePreview] = useState<string | null>(null); // State for image preview
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State for error message

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct); // Populate form with product data for editing
      setImagePreview(initialProduct.image); // Set image preview for editing
    }
  }, [initialProduct]);

  useEffect(() => {
    if (imageFile) {
      const objectUrl = URL.createObjectURL(imageFile); // Create a URL for the uploaded file
      setImagePreview(objectUrl); // Set the image preview
      return () => URL.revokeObjectURL(objectUrl); // Cleanup the URL when the component unmounts or image changes
    }
  }, [imageFile]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) : value, // Parse price as a number
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file); // Set the selected image file
      setProduct((prev) => ({ ...prev, image: file.name })); // Store the file name in product state
    }
  };

  const handleSubmit = () => {
 

    // Check if all fields are filled out
    if (!product.name || !product.price || !product.description || !imageFile) {
      setErrorMessage("No product has been added. Please fill out all fields.");
      return; // Prevent submission if validation fails
    }

    setErrorMessage(null); // Clear any previous error message
    onSubmit(product); // Call the onSubmit function with the product data

    navigate("/seller"); // Navigate to the seller dashboard after successful submission
    console.log(product);
    
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb="4">
      {errorMessage && (
        <Alert status="error" mb="4">
          <AlertIcon />
          <AlertTitle>Error:</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      )}
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
      <FormLabel mt="4">Image</FormLabel>
      <Input
        name="image"
        type="file" // Change input type to file
        accept="image/*" // Accept only image files
        onChange={handleImageChange} // Handle image file selection
        required
      />
      {imagePreview && ( // Conditionally render image preview
        <Image
          src={imagePreview}
          alt="Product Preview"
          boxSize="100px"
          objectFit="cover"
          mt="4"
        />
      )}
      <Button colorScheme="teal" mt="4" type="submit" >
        {initialProduct ? "Update Product" : "Add Product"}
      </Button>
    </Box>
  );
};

export default ProductForm;
