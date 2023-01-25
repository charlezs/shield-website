import Backers from '@/components/sections/Backers';
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
  </Container>
  );
}