import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Banner {
    srcDesktop: string;
    srcMobile: string;
    srcTable?: string;
    children?:ReactNode;
}

export function Banner({ srcDesktop, srcMobile, srcTable,children }: Banner) {

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (
        <Flex
            h={["475px", "calc(100vh - 10.4rem)"]}
            w="100%"
            position="relative"
        >
            <Box as="picture" w="100%">
                <source media="(max-width:480px)" srcSet={srcMobile} />
                <source media="(max-width:850px)" srcSet={srcTable ? srcTable : srcMobile} />
                <source media="(min-width:1025px)" srcSet={srcDesktop} />
                <Image
                    srcSet={`${srcMobile} 480w,${srcTable? srcTable : srcMobile} 650w, ${srcDesktop} 800w`}
                    src={srcDesktop}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                />
            </Box>

            <Box
                position="absolute"
                w="100%"
                h="100%"
                opacity="0.20"
                bg="gray.750"
            />
            {children}
        </Flex>
    )
}