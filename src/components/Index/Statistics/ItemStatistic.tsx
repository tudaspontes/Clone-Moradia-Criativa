import { Flex, FlexProps, Image, Text } from "@chakra-ui/react";
import CountUp from "react-countup";


interface ItemStatisticProps extends FlexProps {
    end: number;
    title: string;
    desc: string;
}

export function ItemStatistic({ end, title, desc, ...ref }: ItemStatisticProps) {
    return (
        <Flex
            flexDir="column"
            mb={[8, 0]}
            {...ref}
            align="center"
            justify="center"
        >
            <Text
                fontSize="5xl"
                fontWeight="600"
                color="teal.450"
            >
                <CountUp
                    end={end}
                    useEasing
                    duration={3}
                />
            </Text>
            <Flex
                flexDir="column"
                align="center"
                justify="center"
                w="100%"
                mt="4"
            >
                <Text
                    fontWeight="600"
                    color="orange.50"
                    fontSize="2xl"
                    mb="2"
                >
                    {title}
                </Text>
                <Text
                    fontSize="0.95rem"
                    color="gray.625"
                    w="15rem"
                    textAlign="center"
                >
                    {desc}
                </Text>
            </Flex>
        </Flex>
    )
}