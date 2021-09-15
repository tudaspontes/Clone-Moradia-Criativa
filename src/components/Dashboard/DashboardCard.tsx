import { FiHeart } from 'react-icons/fi'
import { Icon, Flex, Text, SimpleGrid, Box } from "@chakra-ui/react"
import Link from 'next/link'
import { firestore } from '../../services/firebase';

interface DashboardCardProps {
  title: string;
  update: string;
  begin?: string;
  color: string;
  href:string;
}

export function DashboardCard({ title, update, begin, color, href }: DashboardCardProps) {
  return (
    <Link href={href} passHref>
      <Flex
        as="a"
        bgColor={color}
        color="white"
        borderRadius="lg"
        width="12rem"
        minW="11.5rem"
        h="7rem"
        _hover={{ filter: "brightness(0.9)" }}
        transition="filter 0.2s"
        position="relative"
      >
        <SimpleGrid
          px={4}
          py="6"
        >
          <Text
            fontWeight="500"
            fontSize="md"
          >
            {title}
          </Text>

          <Text
            fontSize="x-small"
            mt={1}
          >
            {update}
          </Text>


          <Text>{begin}</Text>
        </SimpleGrid>

        <Box
          position="absolute"
          right="0.15rem"
        >
          <Icon as={FiHeart} mt={4} mr={4} />

        </Box>
      </Flex>
    </Link>
  )
}