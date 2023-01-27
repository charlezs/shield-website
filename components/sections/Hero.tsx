import { Stack, Flex, Heading, useBreakpointValue, Button, Text, Image, Container, Center } from '@chakra-ui/react';
import {SiDiscord} from 'react-icons/si'
import React from 'react';
import NextLink from 'next/link'

const Hero:React.FC = () => {
    
    return(
  <Center>
    <Stack gap={'40'} bg="#010633" pt='20'maxW="full" direction={{ base: 'column', md: 'row' }}>
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
          <NextLink href='https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D1027617695899865148%26permissions%3D292057786384%26scope%3Dbot%2520applications.commands' passHref>
  
            <Button
              size='lg'
              rounded={'full'}
              bg={'#5765F2'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              leftIcon={<SiDiscord/>}
              >
              Add to Discord
            </Button>
          </NextLink>
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
    </Center>
    )
}
export default Hero;