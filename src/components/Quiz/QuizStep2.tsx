import { ReactNode } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import { QuizTitleHeader } from './QuizTitleHeader';
import { QuizElementImage } from './QuizElementImage';
import { SEO } from "../../utils/seo";
import { QuizElementImageStyleGroup } from "./QuizElementImageStyleGroup";
interface QuizStep2Props {
  children: ReactNode;
}

export function QuizStep2({ children }: QuizStep2Props) {
  return (
    <>
      <SEO title="Passo 2 - Quiz" />

      <Box m="6" maxWidth={780} margin="0 auto">
        <QuizTitleHeader title="Escolha o estilo que combina com você" subtitle="Vamos deixar seu espaço com seu estilo" />
        <QuizElementImageStyleGroup />
        {children}
      </Box>
    </>
  )
}