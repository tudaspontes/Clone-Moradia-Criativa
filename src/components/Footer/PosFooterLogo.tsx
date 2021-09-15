import { Flex } from "@chakra-ui/react";
import { Logo } from "../Navigation/Logo";


export function PosFooterLogo() {
    return (
        <Flex
            w="100%"
            py="10"
            px="4"
            align="center"
            justify="center"
        >
            <Logo width="8rem" />
        </Flex>
    )
}