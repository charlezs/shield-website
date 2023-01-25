import FeatureHeading from '@/components/features/FeatureHeading';
import Backers from '@/components/sections/Backers';
import Feature from '@/components/sections/Features';
import Trust from '@/components/sections/Trust';
import {
  Container
} from '@chakra-ui/react';
import Head from 'next/head';
import Hero from '../components/sections/Hero'
export default function WithBackgroundImage() {
  return (
    <Container maxW="full" bg='#010633'>
    <Head>
        <title>Home</title>
        <meta name="description" content="Shield" />
        <link rel="icon" href="" />
    </Head>
    <Hero />
    <Backers />
    <FeatureHeading />
    <Feature />
    <Trust />
  </Container>
  );
}