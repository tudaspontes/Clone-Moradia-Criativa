import { Flex, FlexProps } from "@chakra-ui/react";
import { BlogItemData, TestimonialsData } from "../../../utils/types";
import { TitleSectionText } from "../../Common/Texts/TitleSectionText";
import { LinkSlider } from "./LinkSlider";
import { SliderCard } from "./SliderCard";
import { TitleSection } from "./TitleSection";

interface SliderSection extends FlexProps {
    title?: string;
    titleLink?: string;
    href?: string;
    type: string;
    autoplay?: boolean;
    data: BlogItemData[] | TestimonialsData[];
    center?: boolean;
    slidesToShowScrol?: number;
}

export function SliderSection({ title, titleLink, autoplay, href, data, type, center, slidesToShowScrol, ...ref }: SliderSection) {
    return (
        <Flex
            {...ref}
            w="100%"
            maxW={1380}
            margin="0 auto"
            
            py="8"
            pt={type === 'testi' ? '0' : "4"}
            px={type === 'projects' ? '0' : "8"}
            flexDir="column"
            align="center"
            justify="center"
            bg={type === 'testimonials' ? 'gray.50' : 'white'}
        >
            {title &&
                <TitleSectionText text={title} />
            }
            
            <SliderCard
                data={data}
                type={type}
                autoplay={autoplay ? true : false}
                center={center ? true : false}
                slidesToShowScrol={slidesToShowScrol ? slidesToShowScrol : 1}
            />

            {titleLink &&
                <LinkSlider title={titleLink} href={href} />
            }
            
        </Flex>
    )
}