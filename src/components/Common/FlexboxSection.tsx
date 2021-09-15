import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FlexboxSection extends FlexProps {
    children: ReactNode
}

export function FlexboxSection({ children, ...ref }: FlexboxSection) {
    return (
        <Flex
            maxW={1200}
            margin="0 auto"
            px="4"
            py="6"

            {...ref}
        >
            {children}
        </Flex>
    )
}