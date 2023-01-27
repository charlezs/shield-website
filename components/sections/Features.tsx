import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Center, HStack, Link, Box, Stack } from "@chakra-ui/react";
import FeatureHeading from "../features/FeatureHeading";
import ScamProtection from "../features/ScamProtection";
import UserPerks from "../features/UserPerks";
// the heading text's on the getting started page

export default function Feature() {
  return (
    <Box maxW='100%' bg='white'>
    <Center>
      <Stack bg="white" direction={{ base:'column', md:'row'}}>
        <ScamProtection />
        <UserPerks />
      </Stack>
      </Center>
      <Center bg="white">
        <Link
          fontWeight="750"
          fontSize="16px"
          href="https://docs.getshield.xyz/api-tutorials/introduction"
          pb="40px"
          color="rgba(22, 128, 252, 1)"
        >
          Check our API documentation
          <ArrowForwardIcon />
        </Link>
      </Center>
    </Box>
  );
}
