import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Home', 'Discord Bot', 'Documentation', 'Twitter'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    color='white'
    rounded={'md'}
    _hover={{
      color: '',
      textDecoration: 'none',
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg='#010633' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'right'}>
          <Flex align={'center'} width={{base: '140px', md: 'auto'}} mr={{base: 0, md: 2}}>
            <Image src='./shield.png' height={'42px'}  alt='shield logo'/>
            {/* <Image src='/images/shieldText.svg' height={'46px'} display={{base: 'none', md: 'unset'}}/> */}
          </Flex>            
          </HStack>
          <Flex alignItems={'center'}>
          <Flex alignItems={'center'}>
          <HStack
              fontSize={'17px'}
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </Flex>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon/>}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            color='white'
            bg='#010633'
          />
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}