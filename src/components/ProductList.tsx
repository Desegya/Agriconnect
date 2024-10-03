import { useState } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Button,
  Image,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { products } from "../data/products";
import Navbar from "./NavBar";
import { useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductList = ({
  addToCart,
}: {
  addToCart: (product: Product) => void;
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Change this value as needed

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate = useNavigate(); // Initialize useNavigate

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get current products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <Box p="5">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mt="4"
      >
        {currentProducts.map((product) => (
          <GridItem
            display="flex"
            flexDirection="column"
            key={product.id}
            borderWidth="1px"
            p="4"
            borderRadius="md"
            boxShadow="md"
            onClick={() => navigate(`/product/${product.id}`)}
            transition="transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease"
            _hover={{
              transform: "scale(1.05)", // Scale up on hover
              boxShadow: "lg", // Change box shadow on hover
              // backgroundColor: "green.100", // Change background color on hover
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              boxSize="150px"
              objectFit="cover"
              mb="4"
            />
            <Text fontSize="xl">{product.name}</Text>
            <Text>Price: ₦{product.price}</Text>
            <Text>{product.description}</Text>
            <Flex mt="auto">
              <Button
                colorScheme="teal"
                mt="2"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </Button>
            </Flex>
          </GridItem>
        ))}
      </Grid>

      {/* Pagination Controls */}
      <HStack spacing={4} mt={4} justify="right">
        <Button
          onClick={() => handlePageChange("prev")}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        <Text whiteSpace="nowrap">
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={() => handlePageChange("next")}
          isDisabled={currentPage === totalPages}
        >
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default ProductList;
