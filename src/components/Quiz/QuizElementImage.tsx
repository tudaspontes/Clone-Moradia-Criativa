import { Box, Image, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { useData } from "../../hooks/useData";
interface QuizElementImageProps {
  image: string;
  title: string;
  children?: ReactNode;
  valueImg: any;
}

const ImageBase: ForwardRefRenderFunction<
  HTMLImageElement,
  QuizElementImageProps
> = (
  {
    image,
    title,
    children,
    valueImg,
    ...rest
  }: QuizElementImageProps,
  ref
) => {

    const dataContext = useData()

    const [color, setColor] = useState(true)
      
  return (
    <Box
      as="button"
      type="button"
      onClick={() => {
        setColor(!color);
        const values = dataContext.data.image;

          var index = values.indexOf(valueImg);
          
          const didNotFindItem = index === -1;
          
          if (didNotFindItem) {
            dataContext.setValues({ image: [...values, valueImg] });
          } else {

            const getAllValuesMinusItem = values.filter((v) => v !== valueImg);
            
            dataContext.setValues({ image: getAllValuesMinusItem });
          }
      }}
    >
      <Image
        name="image"
        border="4px"
        borderColor={color ? 'white' : 'pink.500'}
        transition="0.5s"
        width="100%"
        height="15rem"
        mt={10}
        objectFit="cover"
        src={image}
        alt="Sala com livro Channel"
        {...rest}
        ref={ref}
      >
      </Image>
      
      <Text
        align="center"
        color="gray.650"
      >
        {title}
      </Text>
      {children}
    </Box>
  )
}

export const QuizElementImage = forwardRef(ImageBase)