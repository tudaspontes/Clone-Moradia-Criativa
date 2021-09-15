import { Flex, Text, Divider } from "@chakra-ui/react"

interface ItemWorksProps {
    number: string;
    description: string;
    color: string;
    title: string;
    direction?: string;
}

export function ItemWorks({ number, title, description, color, direction }: ItemWorksProps) {

    const titleArray = title.split(' ')

    return (
        <Flex
            as="article"
            position="relative"
            w="100%"
            px="2"
            mb="8"
        >
            <Text
                position="absolute"
                fontSize="11rem"
                fontWeight="700"
                color="#f2f2f2"
                lineHeight="12rem"
                right={direction === 'right' && 0}
                left={direction === 'left' && 0}
            >
                {number}
            </Text>
            <Flex
                flexDir="column"
                zIndex="2"
                mt="6rem"
                w="100%"
            >
                <Text
                    color="gray.650"
                    fontWeight="600"
                    fontSize="3xl"
                    lineHeight="2rem"
                    noOfLines={2}
                    textAlign={direction === 'right' ? 'right' : 'left'}
                >
                    {titleArray.map(item => {
                        return (
                            <Text as="span" key={item}>
                                {item} < br />
                            </Text>
                        )
                    })}
                </Text>
                <Flex
                    color="gray.500"
                    w="100%"
                    mt="5"
                    justify={direction === 'right' ? 'flex-end' : 'flex-start'}
                    textAlign={direction === 'right' ? 'right' : 'left'}

                >
                    <Text
                        width={["275px"]}
                    >
                        {description}
                    </Text>

                </Flex>
                <Divider
                    w="45%"
                    bg={color}
                    h="5px"
                    mt="4"
                    alignSelf={direction === 'right' ? 'flex-end' : 'flex-start'}
                    opacity={1}
                />
            </Flex>
        </Flex>
    )
}