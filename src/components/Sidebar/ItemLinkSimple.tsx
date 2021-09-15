import { Flex, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import Link from "next/link";

interface ItemLinkSimplesProps {
    href: string;
    name: string;
    icon?: ReactElement;
}

export function ItemLinkSimple({ href, name, icon }: ItemLinkSimplesProps) {
    return (
        <Link href={href}>
            <Flex
                w="100%"
                align="center"
                justify="flex-start"
                px="6"
            >

                {icon}
                <Text
                    as="a"
                    w="100%"
                    fontSize="small"
                    ml="2"
                >
                    {name}
                </Text>
            </Flex>
        </Link>
    )
}