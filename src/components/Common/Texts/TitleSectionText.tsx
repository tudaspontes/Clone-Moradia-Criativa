import { Text, TextProps } from "@chakra-ui/react";

interface TitleSectionText extends TextProps{
    text:string;
}

export function TitleSectionText({ text, ...ref }) {
    return (
        <Text
            color='orange.50'
            fontSize={["3xl","4xl"]}
            fontWeight="700"
            lineHeight={["2.25rem","2.75rem"]}
            mt="2"
            mb="8"
            as="h3"
            {...ref}
        >
            {text}
        </Text>
    )
}