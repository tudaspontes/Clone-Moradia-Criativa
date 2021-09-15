import { Button, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { CgMenuLeft } from 'react-icons/cg'

import { useSidebarDrawer } from "../../hooks/useSidebarDrawer";

import { Logo } from "./Logo";
import { IconsBarHeader } from "./IconsBarHeader";
import { Sidebar } from "../Sidebar";
import { ItemsMenuSection } from './ItemsMenuSection'
import { BtnCallToAction } from "../Common/Buttons/BtnCallToAction";

export function Navigation() {

    const { onOpen } = useSidebarDrawer();


    const isWideVersion = useBreakpointValue({
        base: false,
        md:false,
        lg: true,
    })

    return (
        <>
            <Flex
                w="100%"
                bg="white"
                borderBottom="1px solid #eaeaea"
                as="header"
                top="0"
                position="sticky"
                zIndex="10"
            >
                <Flex
                    w="100%"
                    maxWidth={1340}
                    margin="0 auto"
                    px="2"
                    py={["4", "4", "4", "0"]}
                    align={["flex-end", "flex-end", "flex-end", "center"]}
                    justify={["flex-end", "flex-end", "flex-end", "flex-start"]}
                    position="relative"
                    flexDir={["column", "column", "row"]}
                >
                    {!isWideVersion &&
                        <Flex
                            position="absolute"
                            left="1.5rem"
                            align="center"
                            top="1.25rem"
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
                        </Flex>
                    }

                    <Logo />

                    {isWideVersion &&
                        <>
                            <ItemsMenuSection />

                            <BtnCallToAction
                                href="/quiz"
                                title="Faça nosso quiz"
                                color="gray.50"
                                marginTop="0"
                                width="11rem"
                                ml="4"
                                size="md"
                                fontSize="sm"
                            />
                        </>
                    }


                    {/* 
                    {isWideVersion &&
                        <Flex
                            w={["100%", "100%", "auto"]}
                            px={["1rem", "1rem", "0"]}

                            position={["unset", "unset", "absolute"]}
                            right={["0rem", "0rem", "2rem"]}
                            pt={["5", "5", "0"]}
                            align="center"
                        >

                            <IconsBarHeader />

                        </Flex>
                    } */}

                </Flex>
            </Flex>

            <Sidebar />
        </>
    )
}