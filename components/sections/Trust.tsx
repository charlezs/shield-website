import {
  Image,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  Center,
} from "@chakra-ui/react";

//Logos of companies that trust the brand. Second logo banner on the main page.
const Trust: React.FC = () => {
  return (
    <>
      <Container maxW="full" py="10" bg="rgba(248, 248, 248, 1)">
        <Container maxW="4xl">
          <Text fontSize={"18px"} align="center" color={"gray.500"}>
            Trusted by 100,000+ users across 35+ web3 platforms and communities
          </Text>
          <Center>
            <SimpleGrid
              gap={{ base: "4", md: "8" }}
              columns={{ base: 2, md: 3, lg: 5 }}
            >
              <Center>
                <Image
                  objectFit="cover"
                  src="./charm.png"
                  alt="CHARMVERSE LOGO"
                />
              </Center>
              <Center>
                <Image objectFit="cover" src="./orange.png" alt="ORANGE DAO" />
              </Center>
              <Center>
                <Image objectFit="cover" src="./guild.png" alt="GUILD" />
              </Center>
              <Center>
                <Image
                  objectFit="cover"
                  src="./protocol.png"
                  alt="ORANGE PROTOCOL"
                />
              </Center>
              <Center>
                <Image objectFit="cover" src="./fox.png" alt="FOX SPORTS" />
              </Center>
            </SimpleGrid>
          </Center>
        </Container>
      </Container>
    </>
  );
};
export default Trust;
