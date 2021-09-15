import { Box, Textarea } from "@chakra-ui/react";
import { useData } from "../../hooks/useData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
interface QuizElementTextAreaProps {
  placeholder: string;
  name: string;
}

export function QuizElementTextArea({placeholder, name}: QuizElementTextAreaProps) {

  const dataContext = useData();
  const [textArea, setTextArea] = useLocalStorage('textArea', '')

  return (
    <Box mt={5}>
      <Textarea
        name={name}
        onChange={(e) => {
          dataContext.setValues({ [name]: e.target.value })
          setTextArea(e.target.value)
        }}
        value={textArea}
        placeholder={placeholder}
        fontSize="sm"
        fontWeight="thin"
        color="gray.250"
        h="100px"
        variant="filled"
        borderRadius="0"
        size="lg"
        textAlign="left"
        bg="gray.50"
      />
    </Box>
  )
}