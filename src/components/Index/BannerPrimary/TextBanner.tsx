import { Flex, Text } from "@chakra-ui/react";

export function TextBanner({title,subtitle}){
    return(
        <Flex
            position="absolute"
            w="100%"
            align="center"
            justify="center"
            flexDir="column"
            h="100%"
            
        >
            <Text
                textTransform="uppercase"
                fontSize="2xl"
                fontWeight="500"
                color="gray.50"
            >
                {title}
            </Text>

            
            <Text
                position="absolute"
                bottom="1rem"
                color="gray.50"
                fontSize="small"
                fontWeight="500"
            >
                {subtitle}
            </Text>

        </Flex>
    )
}