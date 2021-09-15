import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useData } from "../../hooks/useData";

interface QuizElementIconsProps {
  name: IconType;
  text: string;
  onClick: () => void;
}

export function QuizElementIcon({
  name,
  text,
  onClick,
}: QuizElementIconsProps) {
  const dataContext = useData();
  return (
    <Flex justifyContent="center">
      <Box
        as="button"
        type="button"
        color={dataContext.data.saveOption === text ? "orange.50" : "black"}
        transition="0.5s"
        alignContent="center"
        onClick={onClick}
      >
        <Icon as={name} mt={6} mb={6} w="71px" h="71px" alignContent="center" />
        <Text w="71px" h="71px">
          {text}
        </Text>
      </Box>
    </Flex>
  );
}
