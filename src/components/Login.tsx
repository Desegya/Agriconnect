import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box
      width="400px"
      mx="auto"
      mt="100px"
      p="5"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Text fontSize="2xl" mb="4" textAlign="center">
        Login
      </Text>
      <form>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full">
            Login
          </Button>
        </Stack>
      </form>
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
