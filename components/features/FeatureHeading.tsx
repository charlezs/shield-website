import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
// Heading above the two features on the homepage
export default function FeatureHeading() {
  return (
    <Container maxW={"100%"} bg="white">
      <Stack textAlign={"center"} align={"center"}>
        <Heading fontSize={{ base: "40px", md: "56px" }} py="28px" lineHeight={"110%"}>
          Protect your users with <br />
          <Text
            bgGradient="linear(to-l, #2F80ED, #B2FFDA )"
            bgClip="text"
            fontSize={{ base: "40px", md: "56px" }}            
            fontWeight="700"
          >
            web3 native security
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} pb="20px" fontSize="25px">
          Secure your community in minutes, for free.
        </Text>
      </Stack>
      <Center>
        <Link
          fontWeight="750"
          fontSize="16px"
          href="/get-started"
          pb="100px"
          color="rgba(22, 128, 252, 1)"
        >
          Learn how to setup Shield <ArrowForwardIcon />
        </Link>
      </Center>
    </Container>
  );
}
