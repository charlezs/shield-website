import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
  }

const Backers:React.FC = () => {
    
    return(
    <>
    <Container maxW="full" py='10'>
        <Text fontSize={'18px'} align='center' py='10' color={'gray.500'}>
            Venture-backed founders from world-class institutions
        </Text>
        <SimpleGrid  columns={{ base: 1, md: 6 }} spacing={10}>
            <Box bg='tomato' height='80px'>

            </Box>
            <Box bg='tomato' height='80px'>

            </Box>
            <Box bg='tomato' height='80px'>

            </Box>
            <Box bg='tomato' height='80px'>

            </Box>
            <Box bg='tomato' height='80px'>

            </Box>
            <Box bg='tomato' height='80px'>

            </Box>
        </SimpleGrid>
    </Container>
    </>
    )
}
export default Backers;