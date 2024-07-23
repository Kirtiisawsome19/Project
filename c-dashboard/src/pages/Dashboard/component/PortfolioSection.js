import React from "react";
import { HStack, Stack, Text, Icon, Tag, Button } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";
import { FaArrowDown } from "react-icons/fa";
import { FaUpLong } from "react-icons/fa6";
const PortfolioSection = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6" align={{base:"flex-start",xl:"row"}} flexDir={{base:"column",xl:"row"}} spacing={{base:4,xl:0}}>
      <HStack spacing={{base:0,xl:16}}   align={{base:"flex-start",xl:"row"}} flexDir={{base:"column",xl:"row"}}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>{" "}
            {/* Fixed text content */}
            <Icon as={FiInfo} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            {" "}
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balances</Text>{" "}
            {/* Fixed text content */}
            <Icon as={FiInfo} />
          </HStack >
          <HStack spacing={2}  align={{base:"flex-start",sm:"row"}} flexDir={{base:"column",sm:"row"}}>
            <HStack > 
              <Text textStyle="h2"> 22.39401000</Text>
              <Tag colorScheme="gray" fontWeight="medium">
                BTC
              </Tag>
            </HStack>

            <HStack>
              <Text textStyle="h2"> ₹ 1,300.00</Text>
              <Tag>INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={FaArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={FaUpLong} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
