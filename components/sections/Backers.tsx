import { ReactElement } from 'react';
import { Image, SimpleGrid, Icon, Text, Stack, Flex, Container, Center } from '@chakra-ui/react';

const Backers:React.FC = () => {
    
    return(
    <>
    <Container maxW="full" py='10'>
        <Text fontSize={'18px'} align='center' py='10' color={'gray.500'}>
            Venture-backed founders from world-class institutions
        </Text>
        <Center>
        <SimpleGrid gap={{ base: '4', md: '8' }} columns={{ base: 2, md: 3, lg: 6 }}>
        <Center>
        <Image
            objectFit='cover'
            src='./mit.png'
            alt='Dan Abramov'
        />
        </Center>
        <Center>

        <Image
            objectFit='cover'
            src='./prince.png'
            alt='Dan Abramov'
        />
        </Center>
        <Center>

        <Image
            objectFit='cover'
            src='./meta.png'
            alt='Dan Abramov'
        />
        </Center>
        <Center>

        <Image
            objectFit='cover'
            src='./messari.png'
            alt='Dan Abramov'
        />
        </Center>
        <Center>

        <Image
            objectFit='cover'
            src='./mckinsey.png'
            alt='Dan Abramov'
        />
        </Center>
        <Center>

        <Image
            objectFit='cover'
            src='./yc.png'
            alt='Dan Abramov'
        />
        </Center>

        </SimpleGrid>
        </Center>
    </Container>
    </>
    )
}
export default Backers;