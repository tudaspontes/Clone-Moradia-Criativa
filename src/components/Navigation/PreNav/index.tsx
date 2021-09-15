import { Alert, AlertDescription, CloseButton, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export function PreNav() {

    const [isClose, setIsClose] = useState(false)

    return (
        <Alert
            bg="orange.50"
            align="center"
            px="10"
            justify="center"
            display={isClose ? 'none' : 'block'}
            >

            <AlertDescription fontSize="small" color="gray.50">
                Queremos te ver feliz dentro do seu próprio lar! Conheça alguns dos nossos projetos
                <Link href="/" passHref>
                    <Text
                        as="a"
                        ml="1"
                        fontWeight="500"
                        color="gray.50"
                    >
                        aqui
                    </Text>
                </Link>
            </AlertDescription>
            <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                color="gray.50"
                onClick={() => setIsClose(true)} />
        </Alert>

    )
}