import React from 'react'
import { Stack,Flex,Icon,Text ,Card, HStack,FormControl,FormLabel,Input, Textarea,Checkbox,Box,Button} from '@chakra-ui/react'


const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" flexGrow={1}>
 <Stack spacing={6}>
 <Text fontWeight="medium" fontSize="sm">
                You will recieve response within 
            </Text>
            <HStack flexDir={{base:"column",md:"row"}}>
            <FormControl>
  <FormLabel>Name</FormLabel>
  <Input placeholder="Enter Your Name..." />
</FormControl>
<FormControl>
  <FormLabel>Surname</FormLabel>
  <Input placeholder="Enter Your Surname..." />
</FormControl>
            </HStack>
            <FormControl>
  <FormLabel>Email</FormLabel>
  <Input type="email" placeholder="Enter Your Email" />
</FormControl>
<FormControl>
  <FormLabel>Message</FormLabel>
  <Textarea  placeholder="Enter Your message" />
</FormControl>
<Checkbox defaultChecked fontSize="xs">
<Text fontSize="xs">
I agree with
    <Box as="span" color="p.purple">
        {""}
  terms and condition
    </Box>
</Text>
</Checkbox>
<Stack>
    <Button fontSize="sm">Send a message</Button>
    <Button  fontSize="sm" colorScheme="gray">Book a meeting</Button>
</Stack>
 </Stack>
        </Card>
  )
}

export default ContactCard
