import { ReactElement } from "react";
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
// the logo banner for the funds who are backing founders (1st logo banner on the home page)
const Backers: React.FC = () => {
  return (
    <>
      <Container maxW="8xl" py="10">
        <Text fontSize={"18px"} align="center" py="10" color={"gray.500"}>
          Built by venture-backed founders from world-class institutions
        </Text>
        <Center>
          <SimpleGrid
            gap={{ base: "4", md: "25" }}
            columns={{ base: 2, md: 3, lg: 6 }}
          >
            <Center>
              <Image objectFit="cover" src="./mit.png" alt="MIT" />
            </Center>
            <Center>
              <Image objectFit="cover" src="./prince.png" alt="PRINCETON" />
            </Center>
            <Center>
              <Image objectFit="cover" src="./meta.png" alt="META" />
            </Center>
            <Center>
              <Image objectFit="cover" src="./messari.png" alt="MESSARI" />
            </Center>
            <Center>
              <Image objectFit="cover" src="./mckinsey.png" alt="MCKINSEY" />
            </Center>
            <Center>
              <Image objectFit="cover" src="./yc.png" alt="YC" />
            </Center>
          </SimpleGrid>
        </Center>
      </Container>
    </>
  );
};
export default Backers;
