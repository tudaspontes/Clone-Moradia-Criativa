import { Flex, Text } from "@chakra-ui/layout";

export function TextFooter() {
    return (
        <Flex
            w="100%"
            maxWidth={1340}
            margin="0 auto"
            px="2"
            py="8"
            align="center"
            justify="center"
            position="relative"
            borderBottom="1px solid #eaeaea"
        >


            <Text
                w="325px"
                textAlign="center"
                fontSize="small"
                lineHeight="1.75rem"
                color="gray.500"
            >
                Transforme seu

                <Text
                    color="orange.50"
                    fontWeight="600"
                    display="inline"
                    mx="1"
                    as="span"
                >
                    sonho em realidade
                </Text>
                ,curta sem dor de cabeça a criação do seu
                cantinho especial
            </Text>
        </Flex>
    )
}