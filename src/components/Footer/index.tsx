import { Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";

import { FooterDesktop } from "./FooterDesktop";
import { FooterMobile } from "./FooterMobile";
import { SocialFooter } from "./SocialFooter";
import { TextFooter } from "./TextFooter";

export function Footer() {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            w="100%"
            bg="gray.50"
            as="footer"
        >
            <Flex
                w="100%"
                maxWidth={1200}
                margin="0 auto"
                px="2"
                py="4"
                position="relative"
                flexDir={["column", "column", "column"]}
            >
                <TextFooter />


                {isWideVersion ?
                    (
                        <FooterDesktop />
                    )
                    :
                    (
                        <FooterMobile />
                    )
                }

                
                {!isWideVersion && <SocialFooter />}


                <Text
                    textAlign="center"
                    mt="4rem"
                    mb="2rem"
                    color="gray.500"
                    fontSize="x-small"
                >
                    © 2021 Moradia Criativa | Arquitetura fácil LTDA - CNPJ 15.095.271/0005-79
                </Text>
            </Flex>
        </Flex>
    )
}