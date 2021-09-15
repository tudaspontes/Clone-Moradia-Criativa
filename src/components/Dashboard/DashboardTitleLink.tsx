import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface DashboardTitleLinkProps {
    title: string;
    href?: string;
    children: ReactNode;
}

export function DashboardTitleLink({ title, href, children }: DashboardTitleLinkProps) {
    return (
        <Flex
            justify="space-around"
            pt={10}
            pb={4}
            fontSize="sm"
            fontWeight="100"
            color="gray.400"
            w="100%"
            flexDir="column"
        >
            <Flex
                w="100%"
                justify="space-between"
                align="center"
                mb="4"
            >

                <Text
                    fontSize="sm"
                    fontWeight="400"
                >
                    {title}
                </Text>

                {href &&
                    <Link href={href} passHref>
                        <Text as="a">Ver todos</Text>
                    </Link>
                }
            </Flex>
            {children}
        </Flex>
    )
}