// src/components/ProductList.tsx
import { useState } from "react";
import {
  Box,
  Input,
  Text,
  Grid,
  GridItem,
  Button,
  Image,
  Flex,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { products } from "../data/products";
import logo from "../assets/logo.png";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";

interface Product {
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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p="5">
      {/* Responsive Stack */}
      <Stack
        direction={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
        spacing={4}
        align="center" // Ensure vertical alignment for icon and logo
        mb={4} // Add some margin at the bottom
      >
        {/* On mobile, logo and cart icon are in one line */}
        <Flex display={{ base: "flex", md: "none" }} justify="space-between" width="100%" alignItems="baseline">
          <Image src={logo} alt="AgriConnect Logo" width="150px" />
          <HStack>
            <VscAccount fontSize="30px" />
            <BsCart3 fontSize="30px" />
          </HStack>
        </Flex>

        {/* On larger screens, logo first, then search bar, then cart icon */}
        <HStack display={{ base: "none", md: "flex" }} spacing={4} width="100%">
          <Image src={logo} alt="AgriConnect Logo" width="150px" />
          <Input
            placeholder="Search for products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            flex="1" // Make the search bar grow and take up available space
            borderRadius={10}
          />
          <HStack>
            <VscAccount fontSize="30px" />
            <Text>Account</Text>
          </HStack>
          <HStack>
            <BsCart3 fontSize="30px" />
            <Text>Cart</Text>
          </HStack>
        </HStack>

        {/* Search bar below logo & icon on mobile */}
        <Input
          placeholder="Search for products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          width="100%"
          display={{ base: "block", md: "none" }} // Only visible on mobile
        />
      </Stack>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mt="4"
      >
        {filteredProducts.map((product) => (
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
    </Box>
  );
};

export default ProductList;
