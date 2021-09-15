import { Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { ButtonChange } from "./ButtonChange";

export function ChangePhoto({ change, data }) {

    const [isActiveButton, setIsActiveButton] = useState(false)
    const [isActiveButton2, setIsActiveButton2] = useState(true)

    function handleBeforePhoto() {
        change(data[0].data.antes.url)
        setIsActiveButton(true)
        setIsActiveButton2(false)

    }

    function handleAfterPhoto() {
        change(data[0].data.depois.url)
        setIsActiveButton2(true)
        setIsActiveButton(false)


    }

    return (
        <Flex
            position="absolute"
            left="50%"
            top="3rem"
            transform="translate(-50%)"
        >
            <ButtonChange
                title="antes"
                functionChange={handleBeforePhoto}
                borderLeftRadius="full"
                teste={isActiveButton}
            />

            <ButtonChange
                title="depois"
                functionChange={handleAfterPhoto}
                borderRightRadius="full"
                teste={isActiveButton2}
            />

        </Flex>
    )
}