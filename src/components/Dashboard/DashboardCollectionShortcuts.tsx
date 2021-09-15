import { Flex, HStack } from "@chakra-ui/react";
import { BiArchive, BiChat } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { DashboardShortcut } from "./DashboardShortcut";

export function DashboardCollectionShortcuts() {
    return (
        <HStack
            overflowX="auto"
            spacing="4"
            align="center"
        >
            <DashboardShortcut href="/dashboard/projects" icon={BiChat} text="Chat" />
            <DashboardShortcut href="/dashboard" icon={FiHeart} text="Favoritos" />
            <DashboardShortcut href="/dashboard" icon={BiArchive} text="Arquivos" />
            <DashboardShortcut href="/dashboard" icon={CgProfile} text="Perfil" />
        </HStack>
    )
}