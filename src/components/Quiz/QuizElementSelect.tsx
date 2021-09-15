import { Select } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { useData } from "../../hooks/useData";
import { useLocalStorage } from "../../hooks/useLocalStorage";
interface QuizElementSelectProps {
  optionValue: { value: string; label: string }[];
  name: string;
}

const SelectBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  QuizElementSelectProps
> = ({ optionValue, name }: QuizElementSelectProps, ref) => {
  const dataContext = useData();
  const [seletedOption, setseletedOption] = useLocalStorage('seletedOption', '')

  return (
    <Select
      onChange={(e) =>{
        dataContext.setValues({ [name]: e.target.value })
        setseletedOption(e.target.value)
      }}
      value={seletedOption}
      name={name}
      placeholder="Selecione..."
      variant="filled"
      borderRadius="0"
      size="md"
      fontSize="sm"
      bg="gray.50"
      ref={ref}
    >
      {optionValue
        ? optionValue.map((item, key) => (
            <option key={key} value={item.value}>
              {item.label}
            </option>
          ))
        : null}
    </Select>
  );
};

export const QuizElementSelect = forwardRef(SelectBase);
