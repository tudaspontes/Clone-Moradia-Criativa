import { Button, Flex, HStack } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";
import { ItemMenu } from "./ItemMenu";

export function ItemsMenuSection() {
    const { user } = useAuth()
    return (
        <HStack
            ml="auto"
            as="nav"
            spacing={["4", "4", "4", "4", "10"]}
            px="10"
        >

            <ItemMenu
                href="/funcionamento"
                title="Conheça +"
            />

            <ItemMenu
                href="/pacote"
                title="Como Funciona"
            />

            <ItemMenu
                href="/faq"
                title="Dúvidas Frequentes"
            />

            <ItemMenu
                href="/projetos"
                title="Nossos Projetos"
            />

            <ItemMenu
                href={user ? "/dashboard" : "/login"}
                title={user ? "MINHA CONTA" : "ENTRE"}
            />


        </HStack>
    )
}