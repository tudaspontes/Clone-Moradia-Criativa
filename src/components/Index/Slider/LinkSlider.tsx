import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface TitleSliderProps {
    title?: string;
    href?: string;
}

export function LinkSlider({ title, href }: TitleSliderProps) {
    return (
        <Link href={href} passHref>
            <Text
                as="a"
                fontSize="small"
                color="gray.500"
                mt="6"
            >
                {title}
            
            </Text>
        </Link>
    )
}