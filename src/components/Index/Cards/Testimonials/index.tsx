import { StarIcon } from "@chakra-ui/icons";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { TestimonialsData } from "../../../../utils/types";


interface CardTestimonialsProps {
    data: TestimonialsData
}

export function CardTestimonials({ data }: CardTestimonialsProps) {

    return (
        <Flex
            w={["100%", "400px"]}
            margin="0 auto"
            flexDir="column"
            align="center"
            justify="center"
            textAlign={["center"]}
            px={["0", "8"]}
            pb="4"
            position="relative"
            my="12"
        >
            <HStack
                color="pink.500"
                align="center"
                fontSize="1.25rem"
                my={4}
                justify="center"
            >
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
            </HStack>
            
            <Text
                color="gray.500"
                lineHeight="1.75rem"
                mb="8"
            >
                {data.data.content}
            </Text>

            <Text
                fontStyle="italic"
                color="gray.700"
                fontWeight="500"
                fontSize="small"
            >
                {data.data.title}
            </Text>

        </Flex>
    )
}