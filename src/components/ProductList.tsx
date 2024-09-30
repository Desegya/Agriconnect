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
} from "@chakra-ui/react";
import { products } from "../data/products";

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
      <Input
        placeholder="Search for products"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

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
            <Button
              colorScheme="teal"
              mt="2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
