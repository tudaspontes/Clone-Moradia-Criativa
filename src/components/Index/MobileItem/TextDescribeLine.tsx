import { Flex, FlexProps, ResponsiveValue, Text } from "@chakra-ui/react";

interface TextDescribeLineProps extends FlexProps{
    title: string;
    desc: string;
    align: ResponsiveValue<AlignSetting>;
}

export function TextDescribeLine({ title, desc, align, ...ref }: TextDescribeLineProps) {
    return (

        <Flex
            w="275px"
            flexDir="column"
            textAlign={align ? align : 'right'}
            {...ref}
        >
            <Text
                fontWeight="600"
                color="teal.450"
                fontSize="lg"
                mb="2"
            >
                {title}
            </Text>
            <Text
                fontSize="0.95rem"
                color="gray.625"
            >
                {desc}
            </Text>
        </Flex>

    )
}