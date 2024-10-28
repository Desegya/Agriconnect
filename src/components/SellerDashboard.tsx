// src/components/SellerDashboard.tsx
import {
  Box,
  Text,
  Image,
  Flex,
  HStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import SellerProducts from "./SellerProducts";
import ProductForm from "./ProductForm"; // Import ProductForm
import logo from "../assets/Logo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Product } from "./ProductList"; // Import Product interface

const SellerDashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]); // State to hold products
  const [editingProduct, setEditingProduct] = useState<Product | null>(null); // State for the product being edited

  const handleAddProduct = () => {
    setEditingProduct(null); // Reset editing state for new product
    navigate("/add-product"); // Adjust the path to your ProductForm component
  };

  const handleProductSubmit = (product: Product) => {
    if (editingProduct) {
      // If editing, update the existing product
      setProducts((prev) =>
        prev.map((p) => (p.id === product.id ? product : p))
      );
    } else {
      // If adding a new product, append to the list
      setProducts((prev) => [...prev, product]);
    }
    setEditingProduct(null); // Reset editing state
    navigate("/"); // Redirect after submission
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product); // Set the product to edit
    navigate("/add-product"); // Navigate to the ProductForm for editing
  };

  // Responsive header text size
  const headerTextSize = useBreakpointValue({ base: "xl", md: "2xl" });

  return (
    <Box p="5">
      {/* Header Section */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        align="center"
        mb={4}
      >
        {/* Header Content */}
        <Flex
          display={{ base: "flex", md: "none" }}
          justify="space-between"
          width="100%"
          alignItems="baseline"
        >
          <Image src={logo} alt="AgriConnect Logo" width="150px" />
          <HStack spacing={4}>
            <IoMdAdd fontSize="30px" onClick={handleAddProduct} />
            <IoNotificationsOutline fontSize="30px" />
            <VscAccount fontSize="30px" onClick={() => navigate("/account")} />
            <IoIosLogOut fontSize="30px" />
          </HStack>
        </Flex>

        <HStack
          display={{ base: "none", md: "flex" }}
          spacing={4}
          width="100%"
          alignItems="flex-end"
        >
          <Image src={logo} alt="AgriConnect Logo" width="150px" />
          <Text
            fontSize={headerTextSize}
            fontWeight="bold"
            textAlign="center"
            flex="1"
          >
            Seller Dashboard
          </Text>
          <HStack spacing={4}>
            <HStack
              cursor="pointer"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.2s ease-in-out",
              }}
              onClick={handleAddProduct}
            >
              <IoMdAdd fontSize="30px" />
              <Text>Add Product</Text>
            </HStack>
            <HStack
              cursor="pointer"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.2s ease-in-out",
              }}
            >
              <IoNotificationsOutline fontSize="30px" />
              <Text>Notifications</Text>
            </HStack>
            <HStack
              cursor="pointer"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.2s ease-in-out",
              }}
              onClick={() => navigate("/account")}
            >
              <VscAccount fontSize="30px" />
              <Text>Account</Text>
            </HStack>
            <HStack
              cursor="pointer"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.2s ease-in-out",
                color: "red.500",
              }}
            >
              <IoIosLogOut fontSize="30px" />
              <Text>Logout</Text>
            </HStack>
          </HStack>
        </HStack>

        <Text
          fontSize={headerTextSize}
          fontWeight="bold"
          display={{ base: "block", md: "none" }}
        >
          Seller Dashboard
        </Text>
      </Stack>

      {/* Products Section */}
      <SellerProducts products={products} onEdit={handleEditProduct} />
      {/* Pass products and edit handler to SellerProducts */}
    </Box>
  );
};

export default SellerDashboard;
