import { Flex, Text } from "@chakra-ui/react";

interface ItemAboutProps {
    number: string;
    desc: string;
}

export function ItemAbout({ number, desc }: ItemAboutProps) {
    return (
        <Flex
            flexDir="column"
        >
            <Text
                fontSize={["3xl","5xl"]}
                fontWeight="600"
                color="teal.450"
            >
                {number}
            </Text>
            <Text
                as="span"
                fontSize="sm"
                lineHeight="1.75"
                fontWeight="light"
            >
                {desc}
            </Text>
        </Flex>

    )
}