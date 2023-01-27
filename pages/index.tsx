import FeatureHeading from "@/components/features/FeatureHeading";
import Footer from "@/components/Footer";
import Backers from "@/components/sections/Backers";
import Demo from "@/components/sections/Demo";
import Feature from "@/components/sections/Features";
import Trust from "@/components/sections/Trust";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Hero from "../components/sections/Hero";

// This is where the main page is rendered. Below you will see the various ./components added in to construct the final product
export default function MainPage() {
  return (
    <>
      <Container maxW="full" bg="#010633">
        <Head>
          <title>Welcome to Shield</title>
          <meta name="description" content="Shield" />
          <link rel="icon" href="" />
        </Head>
        <Hero />
        <Backers />
        <FeatureHeading />
        <Feature />
        <Trust />
        <Demo />
      </Container>
      <Footer />
    </>
  );
}
