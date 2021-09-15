import { Flex, FlexProps, HStack, Icon, IconButton, IconButtonProps, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion"

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import { TitleSectionText } from "../../Common/Texts/TitleSectionText";
import { FlexboxSection } from "../../Common/FlexboxSection";
import { ContentHowToWork } from "./ContentHowToWork";
import { ButtonsSteps } from "./ButtonsSteps";
import { ItemImageCard } from "./ItemImageCard";

interface TestimonialsData {
    data: any[]
}

export function Steps({ data }: TestimonialsData) {

    const [presentItem, setPresentItem] = useState(0)
    const dataLength = data.length - 1;

    const MotionIcon = motion<IconButtonProps>(IconButton)

    function handleClickNextItem() {
        if (presentItem === dataLength) {
            setPresentItem(0)
        } else {
            setPresentItem(presentItem + 1)
        }
    }

    function handleClickBeforeItem() {
        if (presentItem == 0) {
            setPresentItem(dataLength)
        } else {
            setPresentItem(presentItem - 1)
        }
    }

    return (
        <Flex
            w="100%"
            flexDir={["column-reverse", "column-reverse", "column-reverse", "row"]}
        >
            <Flex
                w={["100%", "100%", "100%", "48%"]}
                position="relative"
            >
                <ItemImageCard
                    top="10rem"
                    borderEndStartRadius="0"
                    left={["3rem","3rem","3rem","2.5rem","10rem","12.5rem"]}
                    title="Harmonização de Cores"
                />

                <ItemImageCard
                    top="25rem"
                    right={["3rem","3rem","3rem","2.5rem","10rem","12.5rem"]}
                    borderBottomEndRadius="0"
                    title="Sua casa, seu estilo"
                    textAlign="right"
                />


                <Image
                    src='/slider/slide3.jpg'
                    alt=''
                    mt={["12", "14", "20", 0]}
                    h={["30rem", "30rem",'100%']}
                    objectFit="cover"
                    w="100%"
                    loading="lazy"
                />
            </Flex>
            <Flex
                w={["100%", "100%", "100%", "100%", "52%"]}
            >
                <FlexboxSection

                    align="center"
                    justify="space-between"
                    margin="0"
                    px={["2", "2", "2", "8", "10", "12"]}
                    pb={["4", "20"]}
                    py={["8", "20"]}

                >
                    <Flex>
                        <ButtonsSteps data={data} setPresentItem={setPresentItem} presentItem={presentItem} />

                        <Flex
                            flexDir="column"
                            align="flex-start"
                            w={["100%", "100%", "100%", "500px"]}
                        >
                            <TitleSectionText text={data[presentItem].data.title} />

                            <Flex
                                flexDir="column"
                            >
                                <ContentHowToWork presentItem={presentItem} data={data} />

                                <HStack
                                    alignSelf="flex-end"
                                    mt="4"
                                >
                                    <MotionIcon
                                        aria-label="back items"
                                        icon={<IoIosArrowRoundBack />}
                                        fontSize="4xl"
                                        color="orange.500"
                                        cursor="pointer"
                                        onClick={() => handleClickBeforeItem()}
                                        _focus={{
                                            boxShadow: 'none'
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                    />

                                    <MotionIcon
                                        aria-label="next items"
                                        icon={<IoIosArrowRoundForward />}
                                        fontSize="4xl"
                                        color="orange.500"
                                        cursor="pointer"
                                        onClick={() => handleClickNextItem()}
                                        _focus={{
                                            boxShadow: 'none'
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.8 }}
                                        transitionDuration='0.2s'

                                    />

                                </HStack>
                            </Flex>
                        </Flex>
                    </Flex>
                </FlexboxSection>
            </Flex>
        </Flex>

    )
}