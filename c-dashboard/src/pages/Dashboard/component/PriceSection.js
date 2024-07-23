// PriceSection.js
import React from 'react';
import { CustomCard } from '../../../chakra/CustomCard';
import { HStack, Stack, Text, Icon,Button,Flex,Image,Tab,TabList,TabPanel,Tabs,TabPanels } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { HiOutlineMinusCircle } from "react-icons/hi2";import { AiFillPlusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps =["7:15 PM","7:55 PM","8:55 PM","8:55PM","10:55PM",];

  return (
    <CustomCard>
   <Flex justify="space-between" align="start">
   <Stack>
        <HStack color="black.80">
          <Text fontSize="sm">Wallet Balances</Text>
        </HStack>
        <HStack spacing={2} align={{ base: "flex-start", sm: "center" }} flexDir={{ base: "column", sm: "row" }}>
          <HStack>
            <Text textStyle="h2">
              22.39401000
            </Text>{""}
          </HStack>
          <HStack fontWeight="medium" color="green.500">
            <Icon as={BsArrowUpRight}/>
            <Text fontSize="sm"  color="green" textStyle="h2">22%</Text>
          </HStack> {/* Closing tag for this HStack */}
        </HStack>
      </Stack>
      <HStack>
        <Button leftIcon={<Icon as={AiFillPlusCircle } />}>Buy</Button>
        <Button leftIcon={<Icon as={HiOutlineMinusCircle} />}>Sell</Button>
      </HStack>
   </Flex>
   <Tabs variant='soft-rounded' colorScheme='green'>
<Flex justify="end" >
<TabList bg="black.5" p="3px">
      {["1H", "1D", "1W", "1N"].map((tab) => (
        <Tab 
        
      _selected={{bg:"white"}}
        key={tab} fontSize="sm" p="6px" borderRadius="4">
          {tab}
        </Tab>
      ))}
    </TabList>
</Flex>
  <TabPanels>
    <TabPanel>
    <Image w="100%"src="/images/Graph.png"/>
   <HStack justify="space-between">
   {timestamps.map((timestamp) => (
          <Text key={timestamp} fontSize="sm" color="black.80">
            {timestamp}
          </Text>
        ))}
 
   </HStack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
 
    </CustomCard>
  );
};

export default PriceSection;
