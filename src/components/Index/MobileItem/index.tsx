import { Flex, FlexProps, Image, Text, VStack } from "@chakra-ui/react";
import { FlexboxSection } from "../../Common/FlexboxSection";
import { SubtitlePreText } from "../../Common/Texts/SubtitlePreText";
import { TitleSectionText } from "../../Common/Texts/TitleSectionText";

import { motion } from 'framer-motion'

import { TextDescribeLine } from "./TextDescribeLine";
import { PathAnimation } from "./PathAnimation";

export function MobileItem() {

    

    return (
        <FlexboxSection
            py="14"
            flexDir="column"
        >
            <Flex
                flexDir="column"
                textAlign="center"
                w={["100%", "60%"]}
                margin="0 auto"
            >
                <SubtitlePreText text="Acompanhe todo o processo 24 horas" />
                <TitleSectionText text="Veja a timeline do seu projeto e acompanhe com sue arquiteto!" />
            </Flex>

            <Flex
                w="100%"
                align="center"
                justify="space-evenly"
                position="relative"
            >
                <VStack
                    flexDir="column"
                    spacing="14"
                    position="relative"
                    mr="rem"
                    mt="-6rem"
                >
                    <TextDescribeLine
                        align="right"
                        title="Em qualquer lugar"
                        desc="Acesse a sua produção de energia fotovoltaica direto do seu celular"
                        w="250px"
                    />

                    <TextDescribeLine
                        align="right"
                        title="Fácil de usar"
                        desc="Interface simples e intuitiva para facilitar sua experiência"
                        pr="3rem"
                    />


                    <TextDescribeLine
                        align="right"
                        title="Obtenha descontos"
                        desc="Veja nossa linha de produtos completa para sua casa"
                        w="250px"
                    />
                </VStack>



                <Image
                    src="/phone.png"
                    h="100%"
                    w="30rem"
                    ml={["-4rem", "-7rem"]}
                    zIndex="2"
                />

                <PathAnimation/>


                <VStack
                    flexDir="column"
                    spacing="14"
                    position="relative"
                    ml="-4.5rem"
                    mt="-6rem"

                >
                    <TextDescribeLine
                        align="left"
                        title="Monitore tudo"
                        desc="Acompanhe todo o processo da assinatura do contrato à instalação"
                        w="250px"
                    />

                    <TextDescribeLine
                        align="left"
                        title="Fique atualizado"
                        desc="Receba todas as novidades do mercado de energia"
                        pl="3rem"
                    />


                    <TextDescribeLine
                        align="left"
                        title="Tire suas dúvidas"
                        desc="Saiba tudo sobre o  funcionamento do seu sistema solar"
                        w="250px"
                    />
                </VStack>



            </Flex>

        </FlexboxSection>
    )
}