import {
    Box,
    Center,
    Image,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function ScamProtection() {
    return (
      <Center py={6}>
        <Box
          maxW={'445px'}
          w={'full'}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'250px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Image
              src={
                'scamProtection.png'
              }
              objectFit={'fill'}
              height='100%'
              width={'100%'}
            />
          </Box>
          <Stack>
            <Heading
              color='black'
              fontSize={'2xl'}
              fontFamily={'body'}>
              24/7 Scam Protection
            </Heading>
            <Text color={'gray.500'}>
            We proactively alert you of scam messages, impersonators and hackers to protect your community 24/7.
            </Text>
          </Stack>
        </Box>
      </Center>
    );
  }