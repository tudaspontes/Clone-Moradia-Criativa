import { Text, TextProps } from "@chakra-ui/react";

interface TitleSectionProps extends TextProps{
    title: string;
}

export function TitleSection({ title,...ref }: TitleSectionProps) {
    return (
        <Text
            fontSize={["2xl","3xl"]}
            fontWeight="600"
            color="orange.50"
            mb="10"
            {...ref}
        >
            {title}
        </Text>
    )
}