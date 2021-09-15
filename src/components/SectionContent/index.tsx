import { Box, Flex, Image } from "@chakra-ui/react";
import { FlexboxSection } from "../Common/FlexboxSection";
import { ContentText } from "../Common/Texts/ContentText";
import { SubtitlePreText } from "../Common/Texts/SubtitlePreText";
import { TitleSectionText } from "../Common/Texts/TitleSectionText";
import { BtnCallToAction } from "../Common/Buttons/BtnCallToAction";

interface SectionContent {
    preText?: string;
    title: string;
    content?: string;
    buttonActive?: boolean;
    image: string;
    alt?: string;
    heightImage: string;
    invert?: boolean
    testimonials?: boolean
    dataTestimonials?: any[]
}

export function SectionContent(
    {
        preText,
        title,
        content,
        buttonActive,
        image,
        heightImage,
        invert,
        alt,
    }: SectionContent) {

    return (
        <Box
            bg="gray.50"
            pb={invert ? "20" : "14"}
            py={["8", "20"]}
           
        >
            <FlexboxSection
                flexDir={["column", "column","column",invert ?"row-reverse" : "row"]}
                align="center"
                justify="space-between"
                px={["8","8","8","0"]}
            >
                <Flex
                    flexDir="column"
                    align="flex-start"
                    w={["100%", "100%","100%" ,"500px"]}
                >

                    <SubtitlePreText text={preText} />
                    <TitleSectionText text={title} />

                    {content &&
                        <ContentText text={content} />
                    }

                    {buttonActive &&
                        <BtnCallToAction
                            href="/quiz"
                            title="Faça nosso quiz"
                            color="gray.50"
                            mt="8"
                            width="11rem"
                            size="md"
                            fontSize="sm"
                            
                        />
                    }
                </Flex>
                <Image
                    src={image}
                    alt={alt ? alt : ''}
                    mt={["12","14","20",0]}
                    h={["100%", heightImage]}
                    loading="lazy"
                    objectFit="contain"
                />
            </FlexboxSection>
        </Box>

    )
}