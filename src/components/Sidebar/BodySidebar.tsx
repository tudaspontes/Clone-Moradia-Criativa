import { VStack, DrawerBody } from "@chakra-ui/react";

import { IoIosHelpCircleOutline } from 'react-icons/io'
import { IoLogoWhatsapp } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'

import { ItemLinkSidebar } from "./ItemLinkSidebar";
import { ItemLinkSimple } from "./ItemLinkSimple";
import { LoginSidebar } from "./LoginSidebar";

export function BodySidebar() {
    return (
        <DrawerBody px="0" py="6">
            <VStack>
                <LoginSidebar />
                <ItemLinkSidebar category="Como funciona" href="/" />
                <ItemLinkSidebar category="projetos" href="/" />
                <ItemLinkSidebar category="pacote" href="/pacote" />
                <ItemLinkSidebar category="dúvidas frequentes" href="/faq" />
                <ItemLinkSidebar category="nosso blog" href="/blog" />
                <ItemLinkSidebar bg="teal.450" color="gray.50" category="Faça nosso quiz" href="/quiz" />
            </VStack>


            <VStack spacing="4" w="100%" pt="6">
                <ItemLinkSimple
                    href="/login"
                    name="Precisa de ajuda?"
                    icon={<IoIosHelpCircleOutline size="25" color="#222222" />}
                />
                <ItemLinkSimple
                    href="/"
                    name="contato@moradiacriativa.com.br"
                    icon={<AiOutlineMail size="25" color="#222222" />}
                />
                <ItemLinkSimple
                    href="/"
                    name="99 9 9999 - 9999"
                    icon={<IoLogoWhatsapp size="25" color="#222222" />}
                />
            </VStack>
        </DrawerBody>
    )
}