import { Container, Heading,Flex, Button, Menu,
    MenuButton,
    MenuItem,
    MenuList, 
    HStack,
    Box, Icon} from '@chakra-ui/react'
import React from 'react'
import { FaBars } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
const TopNav = ({title,onOpen}) => {
  return (
  <Box px="4" bg="white">
     <HStack  maxW="100rem"  h="16" justify="space-between"  mx="auto">
        <Icon as={FaBars} onClick={onOpen}    display={{base:"block",lg:"none"}}/>
        <Heading fontWeight="medium" fontFamily="28px">
           {title}
        </Heading>
        <Menu>
  <MenuButton  >
   <Icon as={FaCircleUser} fontSize="26px"/>
  </MenuButton>
  <MenuList>
    <MenuItem>LogOut</MenuItem>
    <MenuItem>Support</MenuItem>
  
  </MenuList>
</Menu>
    
   </HStack>
  </Box>
  )
}

export default TopNav
