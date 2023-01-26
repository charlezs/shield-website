import { SimpleGrid, Image, Center } from '@chakra-ui/react';
import React from 'react';


const GetStartedImages:React.FC = () => {
    
    return (
        <SimpleGrid gap={{ base: '4', md: '40' }} columns={1}>
        <Center>
        <Image
            objectFit='cover'
            src='./secSystem.png'
            alt='Dan Abramov'
        />
        </Center>
        <Center>

        <Image
            objectFit='cover'
            src='./roles.png'
            alt='Dan Abramov'
        />
        </Center>
        <Center>

        <Image
            objectFit='cover'
            src='./dashboard.png'
            alt='Dan Abramov'
        />
        </Center>

        </SimpleGrid>
    )
}
export default GetStartedImages;