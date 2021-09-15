import { Box, Icon, Text, Flex, Image, Avatar, VStack, useBreakpointValue } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ImQuotesRight } from "react-icons/im";
import { FlexboxSection } from "../../Common/FlexboxSection";
import { SubtitlePreText } from "../../Common/Texts/SubtitlePreText";
import { TitleSectionText } from "../../Common/Texts/TitleSectionText";
import { TestimonialsData } from "../../../utils/types";

interface TestimonialsProps {
  data: TestimonialsData[];
}

export function Testimonials({ data }: TestimonialsProps) {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box


      py={["8", "20"]}

    >
      <FlexboxSection
        flexDir={["column", "column", "column", "row"]}
        align={["center","center","flex-end"]}
        justify="space-between"
        px={["8", "8", "8", "0"]}
      >
        <Flex
          flexDir="column"
          align="flex-start"
          w={["100%", "100%", "100%", "500px"]}
        >

          <SubtitlePreText text="O que falam de nós" />
          <TitleSectionText text="Veja depoimentos de clientes satisfeitos" />


          {isWideVersion &&
            <Image
              src="/peoples.jpg"
              alt=''
              mt={["12", "14", "20", 0]}
              h={["100%", '35rem']}
              loading="lazy"
              objectFit="contain"
            />
          }
        </Flex>
        <Flex
          flexDir="column"
          mr={["0","0", "4rem"]}
        >
          {data.map((item, i) => {
            return (
              <Flex
                key={item.uid}
                boxShadow="2xl"
                flexDir="row"
                borderRadius="3xl"
                border="1px solid #f9f9f9"
                px="6"
                py="6"
                w={["100%", "26.5rem"]}
                my="1rem"
                ml={["0","0", i === 1 ? '7rem' : 0]}
              >
                <Avatar
                  src={item.data.image.url}
                  name={item.data.title}
                  size={isWideVersion ? "lg" : "md"}
                  mr="6"
                />
                <Flex
                  flexDir="column"

                >
                  <Text
                    fontSize="0.775rem"
                    lineHeight="1.35rem"
                    color="gray.625"
                  >
                    {item.data.content}
                  </Text>
                  <Text
                    fontSize="small"
                    mt="4"
                    fontWeight="500"
                    color="gray.650"
                  >
                    {item.data.title} | {item.data.city}
                  </Text>
                </Flex>
              </Flex>
            )
          })}
        </Flex>

      </FlexboxSection>
    </Box>
  )
}