import { Box, Image, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { useData } from "../../hooks/useData";
interface QuizElementImageProps {
  image: string;
  title: string;
  children?: ReactNode;
  valueImg: any;
  onClick: () => void;
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
    onClick,
    ...rest
  }: QuizElementImageProps,
  ref
) => {

    const dataContext = useData()
      
  return (
    <Box
      as="button"
      type="button"
      onClick={onClick}
      color={dataContext.data.estilo === title ? 'pink.500' : 'white'}
    >
      <Image
        name="image"
        border="4px"
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

export const QuizElementImageStyle = forwardRef(ImageBase)