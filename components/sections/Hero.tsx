import { Stack, Flex, Heading, useBreakpointValue, Button, Text, Image, Container } from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'
import React from 'react';

const Hero:React.FC = () => {
    
    return(
    <Stack  bg="#010633" pt='10'maxW="full" direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} align={'center'} justify={'center'}>
        <Stack py='6' alignSelf={'flex-start'} spacing={6} w={'full'} maxW={'md'}>
          <Heading fontSize={'56px'}>
            <Text color='white'>
            Eliminate scams from your
            </Text>
            <Text color={'blue.400'} as={'span'}>
            NFT marketplace            
            </Text>
          </Heading>
          <Text fontSize='20px' color={'white'}>
          Shield is a content moderation engine that helps platforms protect users from scams
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
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
              Join Shield Beta
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