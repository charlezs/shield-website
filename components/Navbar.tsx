import { ReactNode } from "react";
import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
// Our Navbar used on all pages
export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#010633" px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* main shield image */}
          <HStack spacing={8} alignItems={"right"}>
            <Link href="/">
              <Flex
                align={"center"}
                width={{ base: "140px", md: "auto" }}
                mr={{ base: 0, md: 2 }}
              >
                <Image src="./shield.png" height={"42px"} alt="shield logo" />
              </Flex>
            </Link>
          </HStack>
          {/* main links */}
          <Flex alignItems={"center"}>
            <HStack
              color="white"
              fontSize={"17px"}
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              <NextLink href="/" passHref>
                Home
              </NextLink>
              <NextLink href="/get-started" passHref>
                Get Started
              </NextLink>
              <NextLink
                href="https://docs.getshield.xyz/api-tutorials/introduction"
                passHref
              >
                Documentation
              </NextLink>
              <NextLink href="https://twitter.com/shield_xyz" passHref>
                Twitter
              </NextLink>
            </HStack>
          </Flex>
          {/* nav for mobile users */}
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            color="white"
            bg="#010633"
          />
        </Flex>
        {/* logic for mobile nav */}
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} color="white">
            <Stack as={"nav"} spacing={4} textColor="white">
              <NextLink href="/" passHref>
                Home
              </NextLink>
              <NextLink href="/get-started" passHref>
                Get Started
              </NextLink>
              <NextLink
                href="https://docs.getshield.xyz/api-tutorials/introduction"
                passHref
              >
                Documentation
              </NextLink>
              <NextLink href="https://twitter.com/shield_xyz" passHref>
                Twitter
              </NextLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
