import { Button, ButtonProps, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"

export function ButtonsSteps({ data, setPresentItem,presentItem }) {

    const MotionButton = motion<ButtonProps>(Button)

    return (
        <VStack
            py="4"
            px={["1","8"]}
            pr={[4,8]}
            spacing="6"
        >
            {
                data.map((item, i) => {
                    return (
                        <MotionButton
                            key={i}
                            bgColor="orange.50"
                            color="gray.50"
                            borderRadius="25px"
                            w="50px"
                            h="50px"
                            opacity={presentItem >= i ? 1 : 0.4}
                            onClick={() => setPresentItem(i)}
                            _hover={{
                                'filter':'brightness(0.8)'
                            }}
                            _focus={{
                                boxShadow:'none'
                            }}
                            transitionProperty="opacity 0.2s"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            animate={presentItem === i && {scale:1.2}}
                        >
                            {i + 1}
                        </MotionButton>
                    )
                })
            }
        </VStack>
    )
}