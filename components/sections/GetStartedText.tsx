import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Center, SimpleGrid, Image, Heading, Stack, Text, Link, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';

const GetStartedText:React.FC = () => {
    
    return(
        <SimpleGrid w='100%'gap={{ base: '4', md: '40' }} columns={1}>
        <Center>
        <Stack mt='6' spacing='3'>
                <Heading color='white' fontSize='34px'>Add the Shield bot to the server(s) of your choice</Heading>
                <Text color='white' fontSize='13px'>
                Click this link to add the Shield bot to your server(s)
                </Text>
                <Link fontSize='20px' href='https://chakra-ui.com' color='rgba(22, 128, 252, 1)'>
                🔗 getshield.xyz/discord
                </Link>
                <Text color='gray.200' fontSize='16px'>
                *Shield bot does not request any admin permissions
                </Text>
        </Stack>
        </Center>
        <Center>
        <Stack mt='6' spacing='3'>
                <Heading color='white' fontSize='34px'>Update your Server Settings in Discord</Heading>
                <Text color='white' fontSize='20px'>
                After adding the Shield Bot to your Server, go to Server Settings. Click on Roles. Scroll to the bottom of the list and Drag Shield to the top of the list.
                </Text>
                <Text color='gray.200'fontSize='16px'>
                *Shield bot does not request any admin permissions
                </Text>
        </Stack>
        </Center>
        <Center>
        <Stack mt='6' spacing='3'>
                <Heading color='white' fontSize='34px'>Visit the Bot Management Dashboard</Heading>
                <Text color='white' fontSize='13px'>
                Click this link to access your admin dashboard for Shield bot
                </Text>
                <Link fontSize='20px' href='https://chakra-ui.com' color='rgba(22, 128, 252, 1)'>
                🔗 dashboard.getshield.xyz/modules
                </Link>
                <Text color='gray.200' fontSize='16px'>
                *Shield bot does not request any admin permissions
                </Text>
                <Text color='white'fontSize='20px'>
                This Can be used for:
                <UnorderedList pl='15'>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
                </Text>
        </Stack>
        </Center>

        </SimpleGrid>
    )
}
export default GetStartedText;