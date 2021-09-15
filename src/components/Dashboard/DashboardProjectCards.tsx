import { HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { firestore } from '../../services/firebase';
import { DashboardCard } from './DashboardCard'
interface DashboardProjectCardsProps {
  fetchProjects: () => void;
  showProjects: any;
}

export function DashboardProjectCards({fetchProjects, showProjects}: DashboardProjectCardsProps) {
  
  return (
    <HStack
      w="100%"
      spacing="6"
      overflowX="auto"
    >
      {fetchProjects &&
        showProjects.map(showProject => {
          return(
            <DashboardCard href="/dashboard" title={showProject.title} update={showProject.title} color="orange.50" />            
          )
        })
      }
    </HStack>
  )
}