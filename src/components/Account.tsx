// src/pages/Account.tsx
import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here
    // For example, clear user session or token, then navigate to login page
    navigate("/login");
  };

  return (
    <Box p="5" maxW="md" mx="auto" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Heading as="h1" size="xl" mb="4">
        My Account
      </Heading>
      <Stack spacing={4}>
        <Text fontSize="lg">Username: [User's Username]</Text>
        <Text fontSize="lg">Email: [User's Email]</Text>
        <Text fontSize="lg">Joined: [Date Joined]</Text>
      </Stack>
      <Button mt="4" colorScheme="red" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Account;
