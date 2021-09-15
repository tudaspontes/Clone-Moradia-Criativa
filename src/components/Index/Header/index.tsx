import { Flex, Image, Text } from "@chakra-ui/react";
import TypewriterComponent from "typewriter-effect";
import { SubtitlePreText } from "../../Common/Texts/SubtitlePreText";
import { BtnCallToAction } from "../../Common/Buttons/BtnCallToAction";

export function Header() {
    return (
        <Flex
            w="100%"
            h={["100%", "100%","100%","40rem"]}
            py={["14", "8"]}
            maxW={1200}
            px={["8","8","8","4"]}
            margin="0 auto"
            flexDir="column"
            zIndex="2"
        >
            <Flex
                mt="8"
                align="center"
                justify="space-between"
                flexDir={["column", "column","column","row"]}
                position="relative"

            >
                <Flex
                    flexDir="column"
                    mt={["auto", "0","0","3rem"]}
                    justify="flex-start"
                    align="flex-start"
                >
                    <SubtitlePreText text="Vamos transformar seu ambiente?" />
                    <Text
                        as="h2"
                        fontSize="6xl"
                        fontWeight="700"
                        lineHeight="3.5rem"
                        color="orange.50"
                        w={["100%","100%","100%","40rem"]}
                    >
                        <TypewriterComponent
                            options={{
                                strings: ['Quarto?', 'Cozinha?', 'Sala?', 'Estamos prontos para seu novo projeto!'],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 25,
                            }}
                        />
                    </Text>
                    <Text
                        mt="6"
                        color="gray.625"
                        as="h4"
                        w={["100%", "475px"]}
                        lineHeight="2rem"
                    >
                        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                         Sed porttitor lectus nibh. Sed magna dictum porta.
                         <strong> Nulla quis lorem ut libero malesuada feugiat. </strong> Donec sollicitudin molestie malesuada. 
                         
                    </Text>
                    <BtnCallToAction
                        href="/quiz"
                        title="Faça nosso quiz"
                        color="gray.50"
                        mt="8"
                        width="11rem"
                        size="md"
                        fontSize="sm"
                    />
                </Flex>

                <Image
                    src="/phone.png"
                    h={["100%","min-content"]}
                    mt={[12,12,12,"-4rem"]}
                    w={["100%","32.5rem"]}
                    objectFit="contain"
                    position={["initial","initial","initial","absolute"]}
                    right={["0","2rem"]}
                    top="0"
                />
            </Flex>
        </Flex>
    )
}