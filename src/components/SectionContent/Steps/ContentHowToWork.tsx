import { Flex, Text } from "@chakra-ui/react";

export function ContentHowToWork({ presentItem, data }) {
    return (
        <Flex
            flexDir="column"
            key={data[presentItem]?.uid}
        >
            <Text
                lineHeight="2rem"
                mb="8"
                h={'8rem'}
            >
                {`"${data[presentItem]?.data.content}"`}
            </Text>
            <Text
                color="gray.600"
                fontWeight="600"
                fontSize="lg"
            >
                {data[presentItem]?.data.name}
            </Text>
            <Text
                color="orange.500"

            >
                {data[presentItem]?.data.city}
            </Text>
        </Flex>
    )
}