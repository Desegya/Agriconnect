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
  useToast,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios"; // Importing Axios
import logo from "../assets/Logo.png";

const Signup = () => {
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast(); // To show notifications

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (password !== confirmPassword) {
      toast({
        title: "Error.",
        description: "Passwords do not match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/users/", {
        username: email,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        role: role, // Assuming you have a role field on your backend
      });

      toast({
        title: "Success!",
        description: "Account created successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      if (role === "buyer") {
        navigate("/");
      } else if (role === "seller") {
        navigate("/seller");
      }
    } catch (error) {
      toast({
        title: "Error.",
        description: error.response?.data?.detail || "An error occurred.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

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
          marginBottom: "20px",
        }}
      />

      <Text fontSize="2xl" mb="4" textAlign="center" fontWeight="bold">
        Sign Up
      </Text>

      {/* Sign-Up Form */}
      <form onSubmit={handleSubmit}>
        <Grid gap={4}>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 2 }}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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
          colorScheme="blue"
          width={{ md: "200px" }}
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
