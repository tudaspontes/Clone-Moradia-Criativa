import { Flex, Text } from "@chakra-ui/layout";
import { FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { RiArrowRightSLine } from 'react-icons/ri'

interface ItemLinkSidebarProps extends FlexProps {
    category: string;
    href?: string;
}

export function ItemLinkSidebar({ category, href, ...ref }: ItemLinkSidebarProps) {
    const MotionText = motion(Text)
    
    return (
        <Link href={href ? href : '/'}>
            <Flex
                {...ref}
                as="a"
                w="100%"
                align="center"
                cursor="pointer"
                borderBottom="1px solid #eaeaea"
                px="6"
                py="4"
            >
                <MotionText
                    fontWeight="500"
                    color='blue.750'
                    fontSize="small"
                    textTransform="uppercase"
                    mr="auto"
                    _hover={{
                        color: 'orange.50'
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    {category}
                </MotionText>
                <RiArrowRightSLine size="20" color="#30444D" />
            </Flex>
        </Link>
    )
}