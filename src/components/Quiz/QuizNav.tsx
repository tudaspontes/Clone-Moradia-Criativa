import { Flex } from "@chakra-ui/react";
import { Logo } from "../Navigation/Logo";

export function QuizNav() {
  return (
    <>
      <Flex
        w="100%"
        bg="white"
        borderBottom="1px solid #eaeaea"
        as="header"
      >
        <Flex
          w="100%"
          maxWidth={1340}
          margin="0 auto"
          px="2"
          py="4"
          align={["flex-end", "center"]}
          justify="center"
          position="relative"
          flexDir={["column", "column", "row"]}
        >
        <Logo />
        </Flex>
      </Flex>
    </>
  )
}