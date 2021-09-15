import { useEffect, useState } from 'react';
import { firestore } from '../../services/firebase';
import { VStack, Text, Flex, Icon } from "@chakra-ui/react";
import { BellIcon } from '@chakra-ui/icons';
import { ArrowBackIcon } from "@chakra-ui/icons";
import { DashboardCard } from "./DashboardCard";
import { useRouter } from "next/dist/client/router";

interface DashboardAllProjectsProps {
  fetchProjects: () => void;
  showProjects: any;
}

export function DashboardAllProjects({fetchProjects, showProjects}:DashboardAllProjectsProps) {
  const router = useRouter()

  return (
    <>
      <Flex
        as="header"
        align="center"
        justify="space-between"
        width="100%"
        p={8}
        fontSize="2xl"
      >
        <ArrowBackIcon color="orange.50" cursor="pointer" onClick={() => router.back()} />
        <Icon as={BellIcon} color="gray.500" cursor="pointer" />
      </Flex>
      <VStack
        justify="center"
        spacing="4" w="100%" pt="6"
      >
        <Text
          color="orange.50"
          fontWeight="semibold"
        >
          Todos os Projetos
        </Text>
        {fetchProjects &&
        showProjects.map(showProject => {
          return(
            <DashboardCard href="/dashboard" title={showProject.title} update={showProject.title} color="orange.50" />            
          )
        })
      }
      </VStack>
    </>
  )
}