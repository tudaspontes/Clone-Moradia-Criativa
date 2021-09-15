import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface DashboardActionsProps {
  children: ReactNode;
}

export function DashboardActions({children}: DashboardActionsProps) {
  return (
    <>
      <Box
        borderRadius="1xl"
        bg="white"
        w="100%"
        h="100%"
        py="6"
      >
        {children}
      </Box>
    </>
  )
}