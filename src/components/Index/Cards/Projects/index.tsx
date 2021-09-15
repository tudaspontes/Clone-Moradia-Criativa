import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";

interface imageData {
    url: string;
    alt: string;
}

interface CardProjectsData {
    data: {
        uid:string;
        data: {
            imageprimary: imageData,
            secoundimage?: imageData
        }
    }
}


export function CardProjects({ data }: CardProjectsData) {

    return (
        

            <Flex
                as="a"
                margin="0 auto"
                mb="4"
                flexDir="column"
                align="center"
                justify="center"
                textAlign={["center"]}
                position="relative"
            >
                <Image
                    src={data.data.imageprimary.url}
                    alt={data.data.imageprimary.alt}
                    w={["100%","60rem"]}
                    h="40rem"
                    objectFit="cover"
                />

            </Flex>
        
    )
}