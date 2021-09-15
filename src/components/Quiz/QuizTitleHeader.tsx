import { Box, Text } from "@chakra-ui/react";

interface QuizTitleHeaderProps {
  title: string;
  subtitle: string;
}

export function QuizTitleHeader({title, subtitle}: QuizTitleHeaderProps) {
  return (
    <Box>
      <Text
        fontSize="2xl"
        fontWeight="600"
        color="gray.650"
      >
        {title}
        <Text
        as="span"
        display="block"
        pt="1rem"
        pb="1rem"
        fontSize="md"
        fontWeight="400">
          {subtitle}
        </Text>
      </Text>
    </Box>
  )
}