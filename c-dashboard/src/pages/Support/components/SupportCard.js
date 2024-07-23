import { Stack, Flex, Icon, Text ,Box} from '@chakra-ui/react'
import { IoMdMail } from "react-icons/io";
import React from 'react'

const SupportCard = ({ leftComponent,icon,title,text}) => {
  return (
    <Flex gap={6} flexDir={{ base: "column", xl: "row" }}>
      <Stack maxW="380px">
        <Icon as={icon} boxSize="9" color="p.purple" />
        <Text fontWeight="Bold" fontSize="30" as="h1" textstyle="h1">
      {title}
        </Text>
        <Text fontSize="sm" color="black.60">
         {text}
        </Text>
      </Stack>
   <Box maxW="550px" w="full">    {leftComponent}</Box>
    </Flex>
  )
}

export default SupportCard
