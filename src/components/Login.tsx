import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Link,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { FormEvent, useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  

  return (
    <Box
      width="400px"
      mx="auto"
      mt="100px"
      p="5"
      borderWidth="1px"
      borderRadius="lg"
    >
      <img
        src={logo}
        alt="AgriConnect Logo"
        style={{
          display: "block",
          margin: "0 auto",
          marginBottom: "20px",
        }}
      />
      <Text fontSize="2xl" mb="4" textAlign="center">
        Login
      </Text>
      
      {/* Form for login */}
      <form >
        <Stack spacing={4}>
          {error && (
            <Text color="red.500" textAlign="center">
              {error}
            </Text>
          )}
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          
          {/* Submit button */}
          <Button type="submit" colorScheme="teal" width="full">
            Login
          </Button>
        </Stack>
      </form>

      <Flex align="center" mt="6" mb="4">
        <Divider />
        <Text px="2" fontSize="sm" color="gray.500" whiteSpace="nowrap">
          Or Sign in with
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
        Don't have an account?{" "}
        <Link color="teal.500" href="/signup">
          Sign up
        </Link>
      </Text>
    </Box>
  );
};

export default Login;
