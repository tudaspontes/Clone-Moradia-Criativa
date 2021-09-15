import { Text, TextProps } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from 'framer-motion'
import { useRouter } from "next/dist/client/router";

export function ItemMenu({ href, title }) {

    const MotionText = motion<TextProps>(Text)


    const router = useRouter();

    return (
        <Link href={href} passHref>
            <MotionText
                as="a"
                fontWeight="500"
                textTransform="uppercase"
                fontSize="0.875rem"
                lineHeight="5rem"
                color={router.asPath === href ? 'orange.50' : 'gray.625'}

                _hover={{
                    color: 'orange.50'
                }}

                whileHover={{ scale: 1.05 }}
            >
                {title}
            </MotionText>
        </Link>
    )
}