import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface AcoordianItemFooter {
    title: string;
    children: ReactNode;
}

export function AcoordianItemFooter({ title, children }: AcoordianItemFooter) {
    return (
        <AccordionItem
            borderTop="none"
            py="2"
            borderBottom="1px solid #eaeaea"
        >
            <h2>
                <AccordionButton
                    _hover={{
                        background:'transparent'
                    }}
                    _focus={{
                        boxShadow:'none',
                    }}
                    
                >
                    <Box flex="1" textAlign="left">
                        <Text
                            fontWeight="500"
                            textTransform="uppercase"
                        >
                            {title}

                        </Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} flexDir="column" display="flex" marginTop="-1rem">
                {children}
            </AccordionPanel>
        </AccordionItem>
    )
}