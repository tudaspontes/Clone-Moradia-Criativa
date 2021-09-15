import { Text, Box, Icon, Flex } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { IconType } from 'react-icons/lib';

interface DashboardShortcutProps {
  icon: IconType;
  text: string;
  href: string;
}

export function DashboardShortcut({ icon, text, href }: DashboardShortcutProps) {
  return (

    <Link href={href} passHref>
      <Flex
        as="a"
        py={6}
        px={4}
        minW="5.5rem"
        w="100%"
        h="6.5rem"
        bg="white"
        
        borderRadius="lg"
        align="center"
        flexDir="column"
        justify="center"
        _hover={{ filter: "brightness(0.9)" }}
        transition="filter 0.2s"
      >
        <Icon as={icon} color="orange.50" fontSize="2xl" mb={2} />
        <Text
          fontSize="xs"
          fontWeight="500"
        >
          {text}
        </Text>
      </Flex>
    </Link>
  )
}