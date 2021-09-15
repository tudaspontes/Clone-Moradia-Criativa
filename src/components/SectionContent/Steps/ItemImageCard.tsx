import { Flex, FlexProps, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"

interface ItemImageCard extends FlexProps{
    title:string;
}


export function ItemImageCard({title, ...ref}:ItemImageCard) {

    const MotionFlex = motion(Flex);

    return (
        <MotionFlex
            position="absolute"
            bg="white"
            px="4"
            py="2"
            w="155px"
            h="fit-content"
            borderRadius="6"
            boxShadow="base"
            
            cursor="pointer"
            flexDir="column"

            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.95 }}

            {...ref}
        >
            <Text
                fontSize="md"
                color="gray.625"
                fontWeight="500"
                _selection={{
                    bg: 'transparent'
                }}
            >
                {title}
            </Text>

        </MotionFlex>
    )
}