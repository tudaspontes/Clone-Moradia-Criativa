import { Button, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ButtonChange extends ButtonProps {
    title: string,
    functionChange: () => void;
    teste:boolean
}

export function ButtonChange({ title, functionChange, teste, ...ref }: ButtonChange) {

    const MotionButton = motion(Button)



    return (
        <MotionButton
            bgColor='teal.450'
            color="gray.50"
            borderRadius="0"
            textTransform="uppercase"
            fontSize="small"
            opacity={teste ? 1 : 0.75}
            px="6"

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={teste && {scale:1.1}}

            _focus={{
                boxShadow: 'none'
            }}
            _hover={{
                filter: 'brightness(0.9)'
            }}

            _active={{
                bg: 'orange.50'
            }}

            onClick={() => {functionChange()}}
            {...ref}
        >
            {title}
        </MotionButton>
    )
}