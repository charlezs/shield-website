import AltFooter from "@/components/AltFooter";
import GetStartedImages from "@/components/sections/GetStartedImages";
import GetStartedText from "@/components/sections/GetStartedText";
import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import Head from "next/head";
// This is where the get-started is rendered. Below you will see the various ./components along with the main code
// added in to construct the final product
export default function GetStarted() {
  return (
    <>
      <Container maxW="full" bg="#010633" minHeight="90vh">
        <Head>
          <title>Get Started</title>
          <meta name="description" content="Shield" />
          <link rel="icon" href="" />
        </Head>
        <Center>
          <Heading py="150px" color="white" fontSize="36px">
            Get started with Shield
          </Heading>
        </Center>
        <Center>
          <SimpleGrid
            w="7xl"
            minHeight="100vh"
            columns={{ base: 1, md: 3 }}
            gap={{ base: "5", md: "6" }}
          >
            <Box>
              <GetStartedText />
            </Box>

            <Center>
              <Box display={{ base: "none", md: "unset" }}>
                <Image
                  objectFit="cover"
                  src="./div.png"
                  alt="Divider"
                  height="95vh"
                />
              </Box>
            </Center>
            <Box>
              <GetStartedImages />
            </Box>
          </SimpleGrid>
        </Center>
      </Container>
      <AltFooter />
    </>
  );
}
