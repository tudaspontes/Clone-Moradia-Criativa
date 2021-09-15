import { Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { CgMenuLeft } from 'react-icons/cg'
import { BellIcon } from '@chakra-ui/icons';
import { useSidebarDrawer } from "../../hooks/useSidebarDrawer";
import { IconsBarHeader } from "../Navigation/IconsBarHeader";
import { Sidebar } from "../Sidebar";
import { ItemsMenuSection } from '../Navigation/ItemsMenuSection'

export function DashboardNav() {

    const { onOpen } = useSidebarDrawer();

    return (
        <>
            <Flex
                w="100%"
                bg="gray.50"
                as="header"

            >
                <Flex
                    w="100%"
                    px="6"
                    py="4"
                    align={"center"}
                    justify={"space-between"}
                    position="relative"
                    flexDir={"row"}
                >

                    <IconButton
                        aria-label="open navigation"
                        icon={<CgMenuLeft color="#ea8565" size="35" />}
                        fontSize="24"
                        variant="unstyled"
                        onClick={() => onOpen()}
                        _focus={{
                            boxShadow: "none"
                        }}
                    />

                    <BellIcon
                        fontSize="2xl"
                        color="gray.500"
                        cursor="pointer"
                        mr={2}
                    />
                </Flex>
            </Flex>
            <Sidebar />
        </>
    )
}