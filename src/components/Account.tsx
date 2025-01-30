import { Box, Heading, Text, Button, Stack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import photo from "../assets/photo.webp";


const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Box
      p="5"
      maxW="md"
      mx="auto"
      marginTop="10px"

    >
      <Heading as="h1" size="xl" mb="4" textAlign="center" marginBottom="30px">
        My Account
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }} // Column on mobile, row on tablets and larger screens
        spacing={6}
        align="start"
      >
        {/* User's Picture */}
        <Image
          borderRadius="full"
          boxSize="120px"
          src={photo}
          alt="User Picture"
          mx={{ base: "auto", md: "0" }} // Center image on mobile
        />
        {/* Account Details */}
        <Stack spacing={4}>
          <Text fontSize="lg">Username: farmerjohn01</Text>
          <Text fontSize="lg">Full name: John Doe</Text>
          <Text fontSize="lg">Email: johndoe@gmail.com</Text>
          <Text fontSize="lg">Date joined: 13-06-2006</Text>
        </Stack>
      </Stack>
      <Button mt="6" colorScheme="red" width="full" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Account;
