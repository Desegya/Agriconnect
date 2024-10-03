// src/components/SellerDashboard.tsx
import {
  Box,
  Text,
  Image,
  Flex,
  HStack,
  Stack,

  useBreakpointValue,
} from "@chakra-ui/react";
import SellerProducts from "./SellerProducts";
import logo from "../assets/logo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";

const SellerDashboard = () => {
  // Responsive header text size
  const headerTextSize = useBreakpointValue({ base: "xl", md: "2xl" });

  return (
    <Box p="5">
      {/* Header Section */}
      <Stack
        direction={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
        spacing={4}
        align="center"
        mb={4}
      >
        {/* On mobile, logo and icons are displayed first */}
        <Flex
          display={{ base: "flex", md: "none" }}
          justify="space-between"
          width="100%"
          alignItems="baseline"
        >
          <Image src={logo} alt="AgriConnect Logo" width="150px" />
          <HStack spacing={4}>
            <IoNotificationsOutline fontSize="30px" />
            <VscAccount fontSize="30px" />
            <IoIosLogOut fontSize="30px"/>
          </HStack>
        </Flex>

        {/* On larger screens */}
        <HStack
          display={{ base: "none", md: "flex" }}
          spacing={4}
          width="100%"
          alignItems="flex-end"
        >
          <Image src={logo} alt="AgriConnect Logo" width="150px" />

          <Text
            fontSize={headerTextSize}
            fontWeight="bold"
            textAlign="center"
            flex="1"
          >
            Seller Dashboard
          </Text>
          <HStack spacing={4}>
            <HStack>
              <IoNotificationsOutline fontSize="30px" />
              <Text>Notifications</Text>
            </HStack>
            <HStack>
              <VscAccount fontSize="30px" />
              <Text>Account</Text>
            </HStack>
            <HStack>
            <IoIosLogOut fontSize="30px"/>
            <Text>Logout</Text>
          </HStack>
          </HStack>
        </HStack>

        {/* Dashboard text for mobile */}
        <Text
          fontSize={headerTextSize}
          fontWeight="bold"
          display={{ base: "block", md: "none" }}
        >
          Seller Dashboard
        </Text>
      </Stack>

      {/* Products Section */}
      <SellerProducts />
    </Box>
  );
};

export default SellerDashboard;
