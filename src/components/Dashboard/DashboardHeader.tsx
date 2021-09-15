import { Box, Flex, Text } from "@chakra-ui/react";

interface DashboardHeaderProps {
  title: string;
  subtitle: any;
}

export function DashboardHeader({ title, subtitle }: DashboardHeaderProps) {
  return (
    <Flex
    >
      <Text
        fontSize="sm"
        mb="4"
        fontWeight="100"
        color="gray.400"
      >
        {title}
        <Text
          color="orange.50"
          as="span"
          display="block"

          fontSize="lg"
          fontWeight="600">
          {subtitle}
        </Text>
      </Text>
    </Flex>
  )
}