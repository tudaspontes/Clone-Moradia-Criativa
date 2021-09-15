import { Text, TextProps } from "@chakra-ui/react";

interface ContentText extends TextProps{
    text:string;
}

export function ContentText({ text, ...ref }) {
    return (
        <Text
            color='gray.625'
            fontSize="md"
            fontWeight="400"
            lineHeight="2.15rem"

            as="h3"
            {...ref}
        >
            {text}
        </Text>
    )
}