import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Center, Link, SimpleGrid } from '@chakra-ui/react';
import FeatureHeading from '../features/FeatureHeading';
import ScamProtection from '../features/ScamProtection';
import UserPerks from '../features/UserPerks';

export default function Feature() {
  return (
    <>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} bg='white' px=''>
        <ScamProtection />
        <UserPerks />
    </SimpleGrid>
    <Center bg='white'>
        <Link fontWeight='750' fontSize='16px' href='https://docs.getshield.xyz/api-tutorials/introduction' pb='40px'color='rgba(22, 128, 252, 1)'>
        Check our API documentation<ArrowForwardIcon />

        </Link>
    </Center>
    </>
    
  );
}