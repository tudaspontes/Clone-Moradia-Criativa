import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ItemAbout } from "./ItemAbout";

interface AboutUs {
  title: string;
  desc: string;
}

export function AboutUs({ title, desc }) {
  return (
    <Flex
      maxW={1220}
      margin="0 auto"
      w="100%"
      flexDir="column"
      pt={16}
      px={6}
      mb={["6","12"]}
      fontWeight="100"
      fontSize="sm"
      color="gray.700"
    >
      <Text
        color="gray"
        fontSize="md"
        fontWeight="medium"
      >
        {title}
      </Text>

      <Text
        my={4}
        mb={8}
        lineHeight="1.75"
        w={["100%"]}
      >
        {desc}
      </Text>

      <SimpleGrid
        columns={3}
        spacing={14}
        align="center"
      >
        <ItemAbout
          number="20"
          desc="Diferentes Comodos"
        />

        <ItemAbout
          number="481"
          desc="Sonhos Realizados"
        />

        <ItemAbout
          number="5"
          desc="Anos de Criatividade"
        />

      </SimpleGrid>

      <Box
        w="fit-content"
        as="a"
        cursor="pointer"
        href="/projects"
      >
        <Text
          my={10}
          fontWeight="medium"
          fontSize="md"
          color="orange.50"
        >
          ver mais +
        </Text>
      </Box>
    </Flex>
  )
}