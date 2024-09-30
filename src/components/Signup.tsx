// src/components/Signup.tsx
import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Link,
  Select,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Signup: React.FC = () => {
  const [role, setRole] = useState("buyer");

  return (
    <Box
      width={{ base: "90%", md: "80%", lg: "60%", xl: "40%" }}
      mx="auto"
      mt="100px"
      p="5"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Text fontSize="2xl" mb="4" textAlign="center">
        Sign Up
      </Text>
      <form>
        <Grid gap={4}>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input type="text" placeholder="Enter your first name" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" placeholder="Enter your last name" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 2 }}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" placeholder="Confirm your password" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isRequired>
              <FormLabel>User Role</FormLabel>
              <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
                <option value="admin" disabled>
                  Admin (requires approval)
                </option>
              </Select>
            </FormControl>
          </GridItem>
        </Grid>
        <Button type="submit" colorScheme="teal" width="full" mt="4">
          Sign Up
        </Button>
      </form>
      <Text mt="4" textAlign="center">
        Already have an account?{" "}
        <Link color="teal.500" href="/login">
          Login
        </Link>
      </Text>
    </Box>
  );
};

export default Signup;
