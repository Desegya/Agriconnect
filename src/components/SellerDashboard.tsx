// src/components/SellerDashboard.tsx
import React, { useState } from "react";
import { Box, Button, Text, Stack } from "@chakra-ui/react";
import ProductList from "./ProductList"; // Import ProductList for displaying products
import ProductForm from "./ProductForm"; // Import ProductForm for adding/updating products
import SellerProducts from "./SellerProducts";


const SellerDashboard = () => {
  

  return (
    <Box p="5">
      <Text fontSize="2xl" mb="4">Seller Dashboard</Text>
      <SellerProducts />
    </Box>
  );
};

export default SellerDashboard;
