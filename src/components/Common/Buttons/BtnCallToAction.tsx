import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion"


interface BtnCallActionProps extends ButtonProps {
    href: string;
    title: string;
}

export function BtnCallToAction({ href, title, ...ref }: BtnCallActionProps) {

    const MotionButton = motion(Button)

    return (
        <Link href={href} passHref>
            <MotionButton
                as="a"
                bg="teal.450"
                size="lg"
                fontSize="md"
                justifyContent="center"
                fontWeight="700"
                borderRadius="0"
                width="16rem"
                mt={10}
                _disabled={{
                    bg: 'gray.500',
                    cursor: 'default'
                }}
                _hover={{
                    bg: 'orange.50',
                }}
                _focus={{
                    boxShadow:'none'
                }}
                
                textTransform="uppercase"
                {...ref}


                //motion
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.025 }}
            >
                {title}
            </MotionButton>
        </Link>
    )
}