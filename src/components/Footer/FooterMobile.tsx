import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image } from "@chakra-ui/react";
import { AcoordianItemFooter } from "./AcoordianItemFooter";
import { ColumnLinkFooter } from "./ColumnLinkFooter";

export function FooterMobile() {
    return (
        <Accordion allowToggle my="10" borderColor="#eaeaea" >

            <AcoordianItemFooter
                title="moradia criativa"
            >
                <ColumnLinkFooter href="/" name="sobre nós" />
                <ColumnLinkFooter href="/" name="novidades" />
                <ColumnLinkFooter href="/" name="contato" />

            </AcoordianItemFooter>

            <AcoordianItemFooter
                title="ajuda"
            >
                <ColumnLinkFooter href="/" name="ajuda e contato" />
                <ColumnLinkFooter href="/" name="pedidos & entregas" />
                <ColumnLinkFooter href="/" name="termos e condições" />
                <ColumnLinkFooter href="/" name="acessibilidade" />
                <ColumnLinkFooter href="/" name="perguntas frequentes" />

            </AcoordianItemFooter>

            <AcoordianItemFooter
                title="sua conta"
            >
                <ColumnLinkFooter href="/" name="Acessar minha conta" />
                <ColumnLinkFooter href="/" name="Meus Projetos" />
                <ColumnLinkFooter href="/" name="Chat do Arquiteto" />
            </AcoordianItemFooter>

        </Accordion>
    )
}