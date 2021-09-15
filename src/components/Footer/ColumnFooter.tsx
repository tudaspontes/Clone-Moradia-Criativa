import { Flex, Text } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface ColumnFooterProps{
    title:string;
    children:ReactNode;
}

export function ColumnFooter({title,children}:ColumnFooterProps){
    return(
        <Flex
            flexDir="column"
        >
            <Text
                textTransform="uppercase"
                fontWeight="600"
                color="gray.750"
                mb="4"
            >
                {title}
            </Text>
            {children}
        </Flex>
    )
}