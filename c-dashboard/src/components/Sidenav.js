import React from "react";
import { Box, HStack, Stack, Icon, Text, Heading } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  const isActiveLink=(Link)=>{
    return location.pathname===Link;
  }
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transaction",
    },
  ];
  return (
    <Stack  
    bg="white"
    justify="space-between" 
    boxShadow={{
        base:"none",
        lg:"lg",
    }}
    
    
    w={{
        base:"full",
        lg:"16rem"
    }} 
    h="100vh"

    >
        <Box>
      <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">
        @CRYPTODashboard
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
             <Link to={nav.link} key={nav.text}>
          <HStack
          
            borderRadius="10px"
          
            py="3"
            px="4"
          
            _hover={{ bg: "#f3f3f7", color: "#171717" }}


          >
            <Icon as={nav.icon} />
            <Text fontSize="14px" fontWeight="medium">
              {nav.text}
            </Text>
          </HStack>
          </Link>
        ))}
      </Box>
      </Box>

      <Box mt="6" mx="3" mb="6">
     <Link to="/Support">
     <HStack
            borderRadius="10px"
         
            py="3"
            px="4"
            _hover={{ bg: "#f3f3f7", color: "#171717" }}
            color="#797E82"
          >
            <Icon as={BiSupport } />
            <Text fontSize="14px" fontWeight="medium"  >
                Support
            </Text>
          </HStack>
     </Link>
          </Box>
    </Stack>
  );
};

export default Sidenav;
