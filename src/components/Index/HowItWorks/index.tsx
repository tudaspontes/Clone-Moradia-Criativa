import { Flex, Text } from "@chakra-ui/react"
import { ItemWorks } from "./ItemWorks"

export function HowItWorks() {
    return (
        <Flex
            w="100%"
            maxWidth={1220}
            px="6"
            py="14"
            as="main"
            align="center"
            justify="center"
            flexDir="column"
            margin="0 auto"
        >
            <Text
                as="h2"
                fontSize="2xl"
                fontWeight="600"
                color="pink.500"
            >
                COMO FUNCIONA
            </Text>
            <ItemWorks
                number="01"
                title="Seu Espaço"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec sit amet"
                color="#D48250"
            />
            <ItemWorks
                number="02"
                title="Seu Espaço"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec sit amet"
                color="#D48250"
                direction="right"
            />

            <ItemWorks
                number="03"
                title="Seu Espaço"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec sit amet"
                color="#D48250"
            />

            <ItemWorks
                number="04"
                title="Seu Espaço"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec sit amet"
                color="#D48250"
                direction="right"
            />
        </Flex>
    )
}