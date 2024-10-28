import {
    Box,
    Stack,
    Flex,
    HStack,
    Text,
    Image,
    Select,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { IoMdAdd, IoIosLogOut } from "react-icons/io";
  import { IoNotificationsOutline } from "react-icons/io5";
  import { VscAccount } from "react-icons/vsc";
  import logo from "../assets/logo.png";
  import { useNavigate } from "react-router-dom";
  import * as XLSX from "xlsx"; // Import xlsx library
  
  // Sample report data to simulate backend response
  const sampleReports = {
    sales: [
      { id: 1, name: "Product A", value: 100 },
      { id: 2, name: "Product B", value: 150 },
    ],
    user_activity: [
      { id: 1, name: "User 1", value: "Logged In" },
      { id: 2, name: "User 2", value: "Made a Purchase" },
    ],
    product_performance: [
      { id: 1, name: "Product A", value: 200 },
      { id: 2, name: "Product B", value: 300 },
    ],
  };
  
  const ReportGenerator = () => {
    const [reportType, setReportType] = useState("");
    const [reportData, setReportData] = useState<T[]>([]);
    const navigate = useNavigate();
  
    const handleGenerateReport = () => {
      if (reportType) {
        setReportData(sampleReports[reportType]);
      }
    };
  
    // Function to generate Excel spreadsheet
    const handleDownloadExcel = () => {
      // Create a worksheet from the report data
      const worksheet = XLSX.utils.json_to_sheet(reportData);
      
      // Create a new workbook and append the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Report");
  
      // Generate the Excel file and trigger download
      XLSX.writeFile(workbook, "report.xlsx");
    };
  
    return (
      <Box p="5">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align="center"
          mb={4}
        >
          <Flex
            display={{ base: "flex", md: "none" }}
            justify="space-between"
            width="100%"
            alignItems="baseline"
          >
            <Image src={logo} alt="AgriConnect Logo" width="150px" />
            <HStack spacing={4}>
              <IoMdAdd fontSize="30px" />
              <IoNotificationsOutline fontSize="30px" />
              <VscAccount fontSize="30px" onClick={() => navigate("/account")} />
              <IoIosLogOut fontSize="30px" />
            </HStack>
          </Flex>
  
          <HStack
            display={{ base: "none", md: "flex" }}
            spacing={4}
            width="100%"
            alignItems="flex-end"
          >
            <Image src={logo} alt="AgriConnect Logo" width="150px" />
            <Text fontWeight="bold" textAlign="center" flex="1">
              Admin Dashboard
            </Text>
            <HStack spacing={4}>
              <HStack
                cursor="pointer"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                <IoNotificationsOutline fontSize="30px" />
                <Text>Notifications</Text>
              </HStack>
              <HStack
                cursor="pointer"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.2s ease-in-out",
                }}
                onClick={() => navigate("/account")}
              >
                <VscAccount fontSize="30px" />
                <Text>Account</Text>
              </HStack>
              <HStack
                cursor="pointer"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.2s ease-in-out",
                  color: "red.500",
                }}
              >
                <IoIosLogOut fontSize="30px" />
                <Text>Logout</Text>
              </HStack>
            </HStack>
          </HStack>
  
          <Text fontWeight="bold" display={{ base: "block", md: "none" }}>
            Admin Dashboard
          </Text>
        </Stack>
  
        {/* Report Generation Section */}
        <Box mb={5}>
          <Text fontSize="lg" fontWeight="bold" mb={3}>
            Generate Reports
          </Text>
          <Select
            placeholder="Select Report Type"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            mb={3}
          >
            <option value="sales">Sales Report</option>
            <option value="user_activity">User Activity Report</option>
            <option value="product_performance">Product Performance Report</option>
          </Select>
          <Button colorScheme="teal" onClick={handleGenerateReport}>
            Generate Report
          </Button>
        </Box>
  
        {/* Report Display Section */}
        {reportData.length > 0 && (
          <Box mt={5}>
            <Text fontSize="lg" fontWeight="bold" mb={3}>
              Report Results
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                {reportData.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.value}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Button colorScheme="green" onClick={handleDownloadExcel} mt={4}>
              Download Excel
            </Button>
          </Box>
        )}
      </Box>
    );
  };
  
  export default ReportGenerator;
  