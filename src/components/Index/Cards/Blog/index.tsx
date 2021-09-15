import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

interface BlogItemData {
    uid: string;

    lastPublicationDate: string;
    data: {
        title: string;
        banner: {
            url: string;
            alt: string;
        }
        content: {
            excerpt: string;
        }
    }

}

interface CardBlogProps {
    blog: BlogItemData;
}

export function CardBlog({ blog }: CardBlogProps) {


    return (
        <Flex
            flexDir="column"
            maxH="25rem"
            w="18rem"
            minH="25rem"
            bg="gray.50"
            margin="0 auto"
            pb="2"
        >

            <Image
                src={blog.data.banner.url}
                alt={blog.data.banner.alt}
                w="100%"
                h="12rem"
                objectFit="cover"
                objectPosition="center"

            />

            <Flex
                flexDir="column"
                w="100%"
                px="8"
                pt="6"
                pb="2"
            >
                <Text
                    fontSize="small"
                    color="gray.500"
                    mb="4"
                >
                    {blog.lastPublicationDate}
                </Text>

                <Text
                    color="gray.700"
                    fontWeight="600"
                    mb="2"
                >
                    {blog.data.title}
                </Text>

                <Text
                    fontSize="0.875rem"
                    color="gray.500"
                    noOfLines={3}
                >
                    {blog.data.content.excerpt[0]}
                </Text>

                <Link href={`/blog/${blog.uid}`} passHref>
                    <Flex
                        align="center"
                        ml="auto"
                        mt="4"
                        as="a"
                    >
                        <Text
                            fontWeight="600"
                            color="gray.700"
                            fontSize="0.875rem"
                        >
                            Ler Mais
                    </Text>
                        <IoIosArrowRoundForward size="22.5" color="#333333" />
                    </Flex>
                </Link>

               

            </Flex>
        </Flex>
    )
}