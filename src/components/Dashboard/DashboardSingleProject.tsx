import { Flex, Icon, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { CgProfile } from 'react-icons/cg'
import { BiChat, BiArchive } from 'react-icons/bi'
import { BellIcon } from '@chakra-ui/icons';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FiHeart } from 'react-icons/fi'
import { DashboardShortcut } from "./DashboardShortcut";
import { DashboardActionsItem } from "./DashboardActionsItem";
import { useRouter } from "next/dist/client/router";


export function DashboardSingleProject() {

  const router = useRouter()
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        width="100%"
        p={8}
        fontSize="2xl"
        color="white"
        bg="pink.500"
      >
        <ArrowBackIcon  cursor="pointer" onClick={() => router.back()} />
        <Icon as={BellIcon} cursor="pointer" />
      </Flex>
      <Flex
        bg="pink.500"
        color="white"
        px={8}
        pb={16}
        
        justify="space-between"
      >
        <Box>
          <Text
            fontWeight="bold"
            fontSize="md"
          >
            Quarto do João
          </Text>
          <Text
            as="span"
            fontSize="xs"
            mt={1}
          >
            atualizado há 2 dias
          </Text>
        </Box>
        <Icon as={FiHeart} mt={4} mr={2}/>  
      </Flex>
      <Flex
        justify="space-around"
        mt="-10"
        px="16"
      >
        <DashboardShortcut href="/dashboard" icon={BiChat} text="Chat"/>
        <DashboardShortcut href="/dashboard" icon={FiHeart} text="Favoritos"/>
        <DashboardShortcut href="/dashboard" icon={BiArchive} text="Arquivos"/>
        <DashboardShortcut href="/dashboard" icon={CgProfile} text="Perfil"/>
      </Flex>
      <Box
        mt="-100"
        borderRadius="35px"
        bg="pink.500"
        py={10}
      >
      </Box>
      <SimpleGrid
        my={10}
      >
        <DashboardActionsItem title="Cantinho novo" type="Mensagem de texto" date="12 Jun 2021"/>
        <DashboardActionsItem title="Quarto do João" type="Arquivo de avaliação" date="14 Jun 2021"/>
        <DashboardActionsItem title="Cantinho novo" type="Mensagem de texto" date="12 Jun 2021"/>
        <DashboardActionsItem title="Quarto do João" type="Arquivo de avaliação" date="14 Jun 2021"/>
      </SimpleGrid>
    </>
  )
}