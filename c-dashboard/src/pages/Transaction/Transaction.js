import React from 'react'
import { Card } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import { MdOutlineFileDownload } from "react-icons/md";
import { Button,Flex,Icon } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel,Tag ,InputGroup,InputLeftElement,Input,Hstack} from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable';
import { IoSearchSharp } from "react-icons/io5";
import { HStack } from '@chakra-ui/react';

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
   <DashboardLayout title="Transactions">
    <Flex justify="end" mt="6" mb="3"> 
      <Button leftIcon={<Icon as={MdOutlineFileDownload}/>}>Export CSV</Button>
    </Flex>
    <Card borderRadius="1rem"><Tabs>
  <TabList pt="4" display="flex" w="full" justifyContent="space-between">
    <HStack>
    {
      tabs.map((tab)=>(
        <Tab key={tab.name} display="flex" gap="2" Pb="4">
          {tab.name}{""}
          <Tag colorScheme='gray' borderRadius="full">{tab.count}</Tag>

        </Tab>


      ))
    }
    </HStack>


<InputGroup maxW="200px"  pr="6">
    <InputLeftElement pointerEvents='none'>
    <Icon as={IoSearchSharp}/>
    </InputLeftElement>
    <Input type='tel' placeholder='Search' />
  </InputGroup>

   
  </TabList>

  <TabPanels>
    <TabPanel>
     <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
    <TabPanel>
    <TransactionTable/>
    </TabPanel>
  </TabPanels>
</Tabs></Card>
   </DashboardLayout>
  )
}

export default TransactionPage
