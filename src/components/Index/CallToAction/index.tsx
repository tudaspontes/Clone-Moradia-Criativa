import { Button, Box, Text, Flex } from "@chakra-ui/react";
import { BtnCallToAction } from "../../Common/Buttons/BtnCallToAction";

interface CallToActionProps {
  image: string;
  text: string;
  subText: string;
  height?: string;
}

export function CallToAction({ image, text, subText, height }: CallToActionProps) {
  return (
    <Box
      bgImage={image}
      bgSize="cover"
      bgPosition="50% 27%"
      h={height ? height : '500px'}
      opacity={1}
    >
      <Flex
        maxWidth={1200}
        margin="0 auto"
        w="100%"
        h="100%"
        color="white"
        pt={8}
        px={[6,6,6,0]}
        flexDir="column"
        justify="center"
        align="flex-start"
      >
        <Text
          fontSize="2.5rem"
          fontWeight="black"
          lineHeight="1.3"
          w={["100%","100%","35rem"]}
          color="teal.450"
        >
          {text}
        </Text>
        <Text
          w={["100%","100%","30rem"]}
          mt="4"
          as="span"
        >
          {subText}
        </Text>

        <BtnCallToAction 
          href="/quiz" 
          title="criar seu cantinho" 
          w={["100%","13rem"]}
        />

      </Flex>
    </Box>
  )
}