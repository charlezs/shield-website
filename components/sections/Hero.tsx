import {
  Stack,
  Flex,
  Heading,
  Button,
  Text,
  Image,
  Center,
} from "@chakra-ui/react";
import { SiDiscord } from "react-icons/si";
import React from "react";
import NextLink from "next/link";
import { TextLoop } from "react-text-loop-next";

//what the user sees as soon as they load the page.
const Hero: React.FC = () => {
  return (
    <Center>
      <Stack
        gap={"40"}
        bg="#010633"
        pt="20"
        maxW="full"
        direction={{ base: "column", md: "row" }}
      >
        <Flex flex={1} align={"center"} justify={"center"}>
          <Stack
            py="6"
            alignSelf={"flex-start"}
            spacing={6}
            w={"full"}
            maxW={"md"}
          >
            <Heading fontSize={{ base: "40px", md: "56px" }}>
              <Text color="white">Eliminate scams from your</Text>
              {/* this is what makes the text cycle vvvv */}
              <TextLoop>
                <Text
                  bgGradient="linear(to-r, #2F80ED, #B2FFDA )"
                  bgClip="text"
                >
                  Discord server
                </Text>
                <Text
                  bgGradient="linear(to-r, #2F80ED, #B2FFDA )"
                  bgClip="text"
                >
                  Web3 Community
                </Text>
                <Text
                  bgGradient="linear(to-r, #2F80ED, #B2FFDA )"
                  bgClip="text"
                >
                  NFT Project
                </Text>
                <Text
                  bgGradient="linear(to-r, #2F80ED, #B2FFDA )"
                  bgClip="text"
                >
                  DAO
                </Text>
                <Text
                  bgGradient="linear(to-r, #2F80ED, #B2FFDA )"
                  bgClip="text"
                >
                  User Experience
                </Text>
              </TextLoop>{" "}
            </Heading>
            <Text fontSize="20px" color={"white"}>
              Shield is an AI-powered discord bot that helps web3 communities
              grow securely
            </Text>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
              py="20px"
            >
              <NextLink
                href="https://discord.com/login?redirect_to=%2Foauth2%2Fauthorize%3Fclient_id%3D1027617695899865148%26permissions%3D292057786384%26scope%3Dbot%2520applications.commands"
                passHref
              >
                <Button
                  size="lg"
                  rounded={"full"}
                  bg={"#5765F2"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  leftIcon={<SiDiscord />}
                >
                  Add to Discord
                </Button>
              </NextLink>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Hero Image"}
            objectFit={"cover"}
            src={"./mainShield.png"}
          />
        </Flex>
      </Stack>
    </Center>
  );
};
export default Hero;
