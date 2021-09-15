import { Box, Flex, Text } from "@chakra-ui/react";
import { DashboardHeader } from "../../components/Dashboard/DashboardHeader";
import { DashboardNav } from "../../components/Dashboard/DashboardNav";
import { DashboardProjectCards } from "../../components/Dashboard/DashboardProjectCards";
import { DashboardActions } from "../../components/Dashboard/DashboardActions";
import { DashboardActionsItem } from "../../components/Dashboard/DashboardActionsItem";
import { DashboardTitleLink } from "../../components/Dashboard/DashboardTitleLink";
import { DashboardCollectionShortcuts } from "../../components/Dashboard/DashboardCollectionShortcuts";
import { SEO } from "../../utils/seo";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { DataFetchContextProvider, useFetch } from "../../hooks/useFetch";
import { firestore } from "../../services/firebase";

export default function Dashboard() {
  const { user } = useAuth()
  const router = useRouter()
  
  useEffect(() => {
  {!user && router.push('/login')} 
    return () => {
    }
  }, [])

  const [showProjects, setShowProjects] = useState([])

  async function fetchProjects() {
    firestore.collection("projects").get().then((querySnapshot) => {
    querySnapshot.forEach(element => {
        const data = element.data();
        setShowProjects(arr => [...arr, data]);
      });
  })
}

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <DataFetchContextProvider>
      <SEO
        title="Meus projetos"
      />
      <DashboardNav />
      <Box
        bgColor="gray.50"
        h="100vh"
        margin="0 auto"
      >
        <Flex
          p={6}
          flexDir="column"
          maxW="1220"
          w="100%"
          margin="0 auto"
        >
          <DashboardHeader title="Olá," subtitle={user?.name} />

          <DashboardTitleLink href="/projects" title="Meus Projetos">
            <DashboardProjectCards
              fetchProjects={fetchProjects}
              showProjects={showProjects}
            />
          </DashboardTitleLink>

          <DashboardTitleLink title="Atalhos">
            <DashboardCollectionShortcuts />
          </DashboardTitleLink>

          <DashboardTitleLink title="Ações em Projetos" href="novidades">

            <DashboardActions>
              <DashboardActionsItem title="Cantinho novo" type="Mensagem de texto" date="12 Jun 2021" />
              <DashboardActionsItem title="Quarto do João" type="Arquivo de avaliação" date="14 Jun 2021" />
            </DashboardActions>

          </DashboardTitleLink>
        </Flex>
      </Box>
    </DataFetchContextProvider>
  )
}