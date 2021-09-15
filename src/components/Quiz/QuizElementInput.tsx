import { Input, Flex } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { useData } from "../../hooks/useData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
interface QuizElementInputProps {
  placeholder: string;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  QuizElementInputProps
> = (
  {
    placeholder,
    ...rest
  }:QuizElementInputProps,
  ref
  ) => {
    const dataContext = useData()
    const [text, setText] = useLocalStorage('text', '')
  return (
    <Flex mb={10}>
      <Input
        onChange={
          (e) => {
          dataContext.setValues({ project: e.target.value })
          setText(e.target.value)
        }}
        value={text}
        name="project"
        variant="filled"
        borderRadius="0"
        size="md"
        bg="gray.50"
        fontSize={12}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </Flex>
  )
}

export const QuizElementInput = forwardRef(InputBase)