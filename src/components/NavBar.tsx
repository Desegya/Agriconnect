// src/components/Navbar.tsx
import {
  Box,
  Input,
  Image,
  Flex,
  HStack,
  Stack,
  Text,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { BsCart3, BsSearch } from "react-icons/bs"; // Import BsSearch icon
import logo from "../assets/logo.png";
import { IoIosLogOut } from "react-icons/io";

interface Props {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Navbar = ({ searchTerm, setSearchTerm }: Props) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <Box>
      {/* Responsive Stack */}
      <Stack
        direction={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
        spacing={4}
        align="center"
        mb={4}
      >
        {/* On mobile, logo and cart icon are in one line */}
        <Flex
          display={{ base: "flex", md: "none" }}
          justify="space-between"
          width="100%"
          alignItems="baseline"
        >
          <Image src={logo} alt="AgriConnect Logo" width="150px" />
          <HStack>
            <VscAccount fontSize="30px" onClick={() => navigate("/account")} />
            <BsCart3
              fontSize="30px"
              cursor="pointer" // Change cursor to pointer on hover
              onClick={() => navigate("/cart")} // Click handler added
            />
            <IoIosLogOut fontSize="30px" onClick={() => navigate("/login")} />
          </HStack>
        </Flex>

        {/* On larger screens, logo first, then search bar, then account and cart icons */}
        <HStack display={{ base: "none", md: "flex" }} spacing={4} width="100%">
          <Image src={logo} alt="AgriConnect Logo" width="150px" />

          {/* InputGroup for Search Bar with Icon */}
          <InputGroup flex="1">
            <InputLeftElement
              pointerEvents="none" // Prevent the icon from interfering with input focus
              children={<BsSearch color="gray.300" />} // Place the search icon here
            />
            <Input
              placeholder="Search for products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderRadius={10}
              pl="10" // Add padding to the left for the search icon
            />
          </InputGroup>

          <HStack
            cursor="pointer"
            _hover={{
              transform: "scale(1.1)", // Slightly increase the size on hover
              transition: "transform 0.2s ease-in-out", // Smooth transition
            }}
            onClick={() => navigate("/account")}
          >
            <VscAccount fontSize="30px" />
            <Text>Account</Text>
          </HStack>
          <HStack
            cursor="pointer"
            _hover={{
              transform: "scale(1.1)", // Slightly increase the size on hover
              transition: "transform 0.2s ease-in-out", // Smooth transition
            }}
            onClick={() => navigate("/cart")}
          >
            {" "}
            {/* Click handler for cart icon */}
            <BsCart3
              fontSize="30px"
              cursor="pointer" // Change cursor to pointer on hover
            />
            <Text>Cart</Text>
          </HStack>
          <HStack
            onClick={() => navigate("/login")}
            cursor="pointer" // Change cursor to pointer on hover
            _hover={{
              transform: "scale(1.1)", // Slightly increase the size on hover
              transition: "transform 0.2s ease-in-out",
              color: "red.500", // Smooth transition
            }}
          >
            <IoIosLogOut fontSize="30px" />
            <Text>Logout</Text>
          </HStack>
        </HStack>

        {/* Search bar below logo & icon on mobile */}
        <InputGroup display={{ base: "block", md: "none" }} width="100%">
          <InputLeftElement
            pointerEvents="none"
            children={<BsSearch color="gray.300" />}
          />
          <Input
            placeholder="Search for products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            pl="10"
          />
        </InputGroup>
      </Stack>
    </Box>
  );
};

export default Navbar;
