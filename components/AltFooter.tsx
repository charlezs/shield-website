import { ReactNode } from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const Logo = (props: any) => {
  return (
    <Image src="./shield.png" height={"57px"} width="190px" alt="shield logo" />
  );
};
//Secondary Footer (used on getting-started)

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function AltFooter() {
  return (
    <Box bg="#010633" color="white">
      <Container as={Stack} maxW={"6xl"} py={20}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link
              href={"https://docs.getshield.xyz/api-tutorials/introduction"}
            >
              Documentation
            </Link>
            <Link href={"https://twitter.com/shield_xyz"}>Twitter</Link>
            <Link href={"https://www.linkedin.com/company/shieldxyz/"}>
              LinkedIn
            </Link>
            <Link href={"mailto:founders@getshield.xyz"}>Contact Us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link
              href={
                "https://typedream.sfo3.digitaloceanspaces.com/Typedream_Terms_of_Service.pdf"
              }
            >
              Terms of Service
            </Link>
            <Link
              href={
                "https://typedream.sfo3.digitaloceanspaces.com/Typedream_Privacy_Policy.pdf"
              }
            >
              Privacy Policy
            </Link>
          </Stack>
        </SimpleGrid>

        <Text fontSize={"sm"} align="center" pt="10">
          Copyright © 2022 Ancient Warriors, Inc. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
}
