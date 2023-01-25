import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
  Flex,
  Divider,
  Center,
} from '@chakra-ui/react';

const Logo = (props: any) => {
  return (
    <Image src='./shieldfooter.png' height={'65px'} width='190px' alt='shield logo'/>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function MainFooter() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
        <Center>
              <Divider borderColor='gray.400' maxW={'6xl'} pt='15px'/>
        </Center>

      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>Documentation</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>LinkedIn</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Privacy Policy</Link>
          </Stack>
        </SimpleGrid>

        <Text fontSize={'sm'} align='center' pt='10'>
        Copyright © 2022 Ancient Warriors, Inc. All rights reserved.
        </Text>

      </Container>
    </Box>
  );
}