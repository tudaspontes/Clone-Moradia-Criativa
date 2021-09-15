import { Text, TextProps } from "@chakra-ui/react";

interface SubtitlePreText extends TextProps{
    text:string;
}

export function SubtitlePreText({ text, ...ref }) {
    return (
        <Text
            color='teal.450'
            fontSize="md"
            fontWeight="500"
            mb="2"
            as="h3"
            {...ref}
        >
            {text}
        </Text>
    )
}