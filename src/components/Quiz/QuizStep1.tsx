import { ReactNode } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import { QuizTitleHeader } from './QuizTitleHeader';
import { QuizElementImage } from './QuizElementImage';
import { QuizElementInput } from './QuizElementInput';
import { SEO } from "../../utils/seo";
import { QuizElementIconGroup } from "./QuizElementIconGroup";
interface QuizStep1Props {
  children: ReactNode;

}

export function QuizStep1({ children }: QuizStep1Props) {
  return (
    <>
      <SEO title="Quiz" />
      <Box
        m="6"
        maxWidth={780}
        margin="0 auto"
      >
        <QuizTitleHeader title="Sobre seu ambiente" subtitle="Escolha o ambiente que iremos transformar!" />
        <SimpleGrid columns={2} gap={2}>
          <QuizElementImage
            valueImg="sala"
            image="/steps/step1/sala.jpeg"
            title="Sala de estar"
          />
          <QuizElementImage
            valueImg="quarto"
            image="/steps/step1/quarto.jpeg"
            title="Quarto"
          />
          <QuizElementImage
            valueImg="varanda"
            image="/steps/step1/varanda.jpeg"
            title="Varanda"
          />
          <QuizElementImage
            valueImg="escritorio"
            image="/steps/step1/escritorio.jpeg"
            title="Escritório"
          />
          <QuizElementImage
            valueImg="cozinha"
            image="/steps/step1/cozinha.jpeg"
            title="Cozinha"
          />
          <QuizElementImage
            valueImg="banheiro"
            image="/steps/step1/banheiro.jpeg"
            title="Banheiro"
          />
        </SimpleGrid>
        <Text mb={4} mt={10} color="gray.650" textAlign="justify" > {" "} Que <strong>nome</strong> vamos dar à transformação? </Text>
        <QuizElementInput
          placeholder="Ex: Cantinho dos estudos"
        />
        <Text mb={4} color="gray.650" textAlign="justify" > O que é mais <strong>difícil</strong> pra você na hora de <strong>decorar</strong>? </Text>

        <SimpleGrid columns={3}>
          <QuizElementIconGroup />
        </SimpleGrid>
        {children}
      </Box>
    </>
   )
}