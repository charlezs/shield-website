import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Center,
    Link,
  } from '@chakra-ui/react';
  import {ArrowForwardIcon} from '@chakra-ui/icons'

  export default function FeatureHeading() {
    return (
      <Container maxW={'100%'} bg='white'>
        <Stack
          textAlign={'center'}
          align={'center'}
          >
          <Heading
            fontWeight={600}
            fontSize='56px'
            py='28px'
            lineHeight={'110%'}>
            Protect your users with <br />
            <Text color={'blue.300'}>
            web3 native security
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} pb='30px'fontSize='20px'>
          Secure your community in minutes, for free.
          </Text>
        </Stack>
        <Center>
        <Link fontSize='16px' href='https://chakra-ui.com' pb='100px'color='rgba(22, 128, 252, 1)'>
                Learn how to setup Shield <ArrowForwardIcon />

        </Link>
        </Center>
      </Container>
    );
  }
  
 