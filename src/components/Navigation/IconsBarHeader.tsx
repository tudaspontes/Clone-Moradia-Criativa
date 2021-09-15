import { HStack, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";

import { RiUser3Line } from 'react-icons/ri'

export function IconsBarHeader() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <HStack
            spacing="6"
            borderLeft={isWideVersion ? "1px solid #eaeaea" : 'none'}
            pl="8"
            py="2"
        >
            <Link href="/login">
                <a>
                    <RiUser3Line color="orange.50" size="18" />
                </a>
            </Link>

        </HStack>
    )
}