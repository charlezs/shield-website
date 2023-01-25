import { Stack, Flex, Heading, useBreakpointValue, Button, Text, Image, Container } from '@chakra-ui/react';
import {SiDiscord} from 'react-icons/si'
import React from 'react';

const Hero:React.FC = () => {
    
    return(
    <Stack  bg="#010633" pt='20'maxW="full" direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} align={'center'} justify={'center'}>
        <Stack py='6' alignSelf={'flex-start'} spacing={6} w={'full'} maxW={'md'}>
          <Heading fontSize={'56px'}>
            <Text color='white'>
            Eliminate scams from your
            </Text>
            <Text color={'blue.400'} as={'span'}>
            NFT Project            
            </Text>
          </Heading>
          <Text fontSize='20px' color={'white'}>
          Shield is an AI-powered discord bot that helps web3 communities grow securely
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} py='20px'>
            <Button
              size='lg'
              rounded={'full'}
              bg={'#1576E7'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              leftIcon={<SiDiscord/>}
              >
              Add to Discord
            </Button>
            <Button
              size='lg'
              rounded={'full'}
              bg={'white'}
              color={'black'}
              _hover={{
                bg: 'blue.500',
              }}
              >
              Admin Dashboard
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} >
        <Image
          alt={'Hero Image'}
          objectFit={'cover'}
          src={
            './mainShield.png'
          }
        />
      </Flex>
    </Stack>
    )
}
export default Hero;