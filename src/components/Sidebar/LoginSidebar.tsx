import { Flex, Text,  } from "@chakra-ui/layout";
import { Button, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ImSwitch } from 'react-icons/im'
import { useAuth } from "../../hooks/useAuth";
import { firebase } from "../../services/firebase";

interface LoginSidebarProps {
  href?: string;
}

export function LoginSidebar({href}:LoginSidebarProps) {
  const { user } = useAuth()
  const router = useRouter()
  const MotionText = motion(Text)

  return (
    <Link href={user ? "/dashboard" : "/login"}>
      <Flex
          as="a"
          w="100%"
          align="center"
          cursor="pointer"
          borderBottom="1px solid #eaeaea"
          px="6"
          py="4"
      >{user && 
        <Tooltip
          hasArrow
          label="sair?"
          bg="grey"
        >
          <Button mr={10}>
            <ImSwitch
              size="20"
              color="#ea8565"
              onClick={() => firebase.auth().signOut() && window.location.replace('/')}
            />
          </Button>
        </Tooltip>       
      }      
        
        <MotionText
            fontWeight="500"
            color="#30444D"
            fontSize="small"            
            textTransform="uppercase"
            mr="auto"
            _hover={{
              color: 'orange.50'
            }}
            whileHover={{ scale: 1.05 }}
        >
            {user?.name ?? "ENTRAR"}
        </MotionText>
      </Flex>
    </Link>
  )
}

