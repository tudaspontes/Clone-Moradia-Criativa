import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface ColumnLinkFooter{
    href:string;
    name:string;
}

export function ColumnLinkFooter({href,name}:ColumnLinkFooter){
    return(
        <Link href={href} passHref>
            <Text
                as="a"
                textTransform="uppercase"
                fontSize="0.875rem"
                color="gray.700"
                mt="1rem"
                cursor="pointer"
            >
                {name}
            </Text>
        </Link>
    )
}