import { SimpleGrid, Image, Center } from "@chakra-ui/react";
import React from "react";

// the right column on the getting started page
const GetStartedImages: React.FC = () => {
  return (
    <SimpleGrid gap={{ base: "4", md: "40" }} columns={1}>
      <Center>
        <Image objectFit="cover" src="./secSystem.png" alt="SECURITY SYSTEM" />
      </Center>
      <Center>
        <Image objectFit="cover" src="./roles.png" alt="ROLES DASHBOARD" />
      </Center>
      <Center>
        <Image objectFit="cover" src="./dashboard.png" alt="DASHBOARD" />
      </Center>
    </SimpleGrid>
  );
};
export default GetStartedImages;
