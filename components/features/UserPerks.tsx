import { Box, Center, Image, Heading, Text, Stack } from "@chakra-ui/react";

//User perks card, right card on homepage
export default function UserPerks() {
  return (
    <Center py={6}>
      <Box
        maxW={"445px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"250px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            src={"userPerks.png"}
            objectFit={"fill"}
            height="100%"
            width={"100%"}
            alt="user perks image"
          />
        </Box>
        <Stack>
          <Heading color="black" fontSize={"2xl"} fontFamily={"body"}>
            User Engagement Perks
          </Heading>
          <Text color={"gray.500"}>
            Create engagement in your community effortlessly with automated scam
            alerts, NFT mint simulations & analytics.
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
