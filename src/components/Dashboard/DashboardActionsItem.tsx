import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useAuth } from '../../hooks/useAuth'
interface DashboardActionsItemProps {
  title: string;
  type: string;
  date: string;
}

export function DashboardActionsItem({title, type, date}:DashboardActionsItemProps) {
  const { user } = useAuth()
  return (
    <Flex
      mt={4}
      margin="0 auto"
      justify="center"
      align="center"
      maxWidth="600px"
      justifyContent="space-around"
      p={2}
    >
      <Image
        height="3rem"
        borderRadius="full"
        border="1px"
        borderColor="pink.500"
        src={user?.avatar}
      >
      </Image>
      <Box>
        <Text
          fontSize="xs"
          fontWeight="semibold"
        >
          {title}
        </Text>
        <Text
          fontSize="xx-small"
          fontWeight="100"
          color="gray.400"
        >
          {type}
        </Text>
      </Box>
      <Text
        fontSize="xx-small"
        fontWeight="100"
        color="gray.400"
      >
        {date}
      </Text>
    </Flex>
  )
}