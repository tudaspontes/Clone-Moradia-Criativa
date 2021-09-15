import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
import { useState } from "react";

export function PreHeader() {

    const [isClose, setIsClose] = useState(false)

    return (
        <Alert
            bg="gray.50"
            align="center"
            px="10"
            justify="center"
            display={isClose ? 'none' : 'block'}>

            <AlertDescription fontSize="small">
                Comunicado sobre COVID-19, veja mais
            </AlertDescription>
            <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setIsClose(true)} />
        </Alert>

    )


}