import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Center,
    Link,
    Button,
  } from '@chakra-ui/react';
  import {ArrowForwardIcon} from '@chakra-ui/icons'

  export default function Demo() {
    return (
      <Container maxW={'100%'} bg='white' pb='10'>
        <Stack
          textAlign={'center'}
          align={'center'}
          >
          <Heading
            fontWeight={750}
            fontSize='60px'
            py='28px'
            lineHeight={'110%'}>
            Focus on growing your users.  <br />
            <Text fontSize='55px'color={'black'}>
            We focus on defending them.
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'} pb='30px'fontSize='20px'>
          Wanna protect your community from scammers, <br/> 
            impersonators, and hackers? Let&apos;s chat!
          </Text>
        </Stack>
        <Center>
        <Link href='https://calendly.com/emanft/shield?month=2023-01' isExternal>
        <Button
              size='lg'
              rounded={'full'}
              bg={'#1576E7'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              rightIcon={<ArrowForwardIcon />}
              >
              Book A Demo
            </Button>
        </Link>
        </Center>
      </Container>
    );
  }
  