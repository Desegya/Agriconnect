// src/components/ProductList.tsx
import { useState } from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Button,
  Image,
  Flex,

} from "@chakra-ui/react";
import { products } from "../data/products";
import Navbar from "./NavBar";


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
