// src/components/Signup.tsx
import { useState } from "react";
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
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa"; // Import Google and Facebook icons
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png"; // Adjust the path based on your folder structure

const Signup = () => {
  const [role, setRole] = useState(""); // Set initial role to an empty string

  return (
    <Box
      width={{ base: "90%", md: "80%", lg: "60%", xl: "40%" }}
      mx="auto"
      mt="100px"
      p="5"
      borderWidth="1px"
      borderRadius="lg"
    >
      {/* Logo */}
      <img
        src={logo}
        alt="AgriConnect Logo"
        style={{
          display: "block",
          margin: "0 auto",
          // width: "100px",
          marginBottom: "20px",
        }}
      />

      <Text fontSize="2xl" mb="4" textAlign="center" fontWeight="bold">
        Sign Up
      </Text>

      {/* Sign-Up Form */}
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
                <option value="" disabled>
                  Select role
                </option>
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

      <Flex align="center" mt="6" mb="4">
        <Divider />
        <Text px="2" fontSize="sm" color="gray.500" whiteSpace="nowrap">
          Or Sign up with
        </Text>
        <Divider />
      </Flex>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify="center"
      >
        <Button
          leftIcon={<FcGoogle />}
          bg="#ccc"
          color="black"
          width={{ md: "200px" }}
        >
          Google
        </Button>
        <Button
          leftIcon={<FaFacebook />}
          colorScheme="facebook"
          width={{ md: "200px" }}
          // variant="outline"
        >
          Facebook
        </Button>
      </Stack>

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
