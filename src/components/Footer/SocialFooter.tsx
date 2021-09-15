import { Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";

export function SocialFooter() {
    return (
        <Flex
            flexDir="column"
            
        >
            <Text
                textTransform="uppercase"
                fontWeight="600"
                color="gray.750"
                mb="4"
                textAlign="center"
            >
                SOCIAL
            </Text>
            <HStack spacing="8" margin="0 auto">
                <Link href="/" passHref>
                    <a>
                        <FaFacebookF size="25" />
                    </a>
                </Link>
                <Link href="/" passHref>
                    <a>
                        <FaInstagram size="25" />
                    </a>
                </Link>
                <Link href="/" passHref>
                    <a>
                        <FaPinterest size="25" />
                    </a>
                </Link>
            </HStack>
        </Flex>
    )
}