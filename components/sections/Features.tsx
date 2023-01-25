import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Center, Link, SimpleGrid } from '@chakra-ui/react';
import FeatureHeading from '../features/FeatureHeading';
import ScamProtection from '../features/scamProtection';
import UserPerks from '../features/userPerks';

export default function Feature() {
  return (
    <>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} px='80' bg='white'>
        {/* <FeatureHeading /> */}
        <ScamProtection />
        <UserPerks />
    </SimpleGrid>
    <Center bg='white'>
        <Link fontSize='16px' href='https://chakra-ui.com' pb='40px'color='rgba(22, 128, 252, 1)'>
                Learn how to setup Shield <ArrowForwardIcon />

        </Link>
    </Center>
    </>
    
  );
}