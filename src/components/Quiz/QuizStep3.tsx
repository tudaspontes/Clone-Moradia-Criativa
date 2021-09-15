import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import { QuizTitleHeader } from './QuizTitleHeader';
import { QuizElementImage } from './QuizElementImage';
import { QuizElementSelect } from './QuizElementSelect';
import { QuizElementTextArea } from './QuizElementTextArea';
import { QuizElementColor } from './QuizElementColor';
import { SEO } from "../../utils/seo";
import { ReactNode } from "react";
interface QuizStep3Props {
  children: ReactNode;
}

export function QuizStep3({ children }: QuizStep3Props) {

  return (
    <>
      <SEO title="Passo 3 - Quiz" />
      <Box m="6" maxWidth={780} margin="0 auto">
        <QuizTitleHeader title="Quais mudanças vamos fazer?" subtitle="O que deseja que a gente faça?" />
        <SimpleGrid columns={2} gap={2}>
          <QuizElementImage
            valueImg="pintura"
            image="/steps/step3/pintura.jpeg"
            title="Pintura"
          />
          <QuizElementImage
            valueImg="papel-parede"            
            image="/steps/step3/papel-parede.jpeg"
            title="Papel de Parede"
          />
          <QuizElementImage
            valueImg="prateleiras"
            image="/steps/step3/prateleiras.jpeg"
            title="Prateleiras"
          />
          <QuizElementImage
            valueImg="tapetes"
            image="/steps/step3/tapetes.jpeg"
            title="Tapetes"
          />
          <QuizElementImage
            valueImg="luminarias"
            image="/steps/step3/luminarias.jpeg"
            title="Luminárias"
          />
          <QuizElementImage
            valueImg="espelhos"
            image="/steps/step3/espelhos.jpeg"
            title="Espelhos"
          />
        </SimpleGrid>
        <Text mt={10} mb={4} color="gray.650" > Quanto você <strong>pretende</strong> investir? </Text>
        <QuizElementSelect          
           optionValue={[
            { value: "1", label: "Até R$ 3.000,00" },
            { value: "2", label: "de R$ 3.000,00 a R$7.000,00" },
            { value: "3", label: "Mais que R$ 7.000,00" },
          ]}
          name="quanto"
        />
        <Text mt={10} color="gray.650" >Conte um pouco <strong>sobre você</strong>:</Text>
        <Text mb={4} fontSize="xs" color="gray.250">Se quiser, pode responder depois!</Text>
        <QuizElementTextArea
          placeholder="Ex: Homem, solteiro, pai de um dog, designer e programador. Fico muito tempo no escritório e sou apaixonado por música!"
          name="sobre"
        />
        <Text mt={10} color="gray.650">Escolha as <strong>cores</strong> para seu ambiente </Text>
        <Text mb={4} fontSize="xs" color="gray.250">Escolha até 3 cores diferentes</Text>
        <QuizElementColor />
        <Text mt={10} mb={4} color="gray.650"><strong>Quem</strong> vai usar esse local?</Text>
        <QuizElementSelect
          optionValue={[
            { value: "1", label: "Eu mesmo" },
            { value: "2", label: "Filhos" },
            { value: "3", label: "Visitas" },
          ]}
          name="quem"
        />
        <Text mt={10} mb={4}>Para quê vai <strong>servir</strong> o ambiente?</Text>
        <QuizElementSelect
          optionValue={[
            { value: "1", label: "Lazer" },
            { value: "2", label: "Estudos" },
            { value: "3", label: "Trabalho" },
          ]}
          name="para"
        />
        <Text mt={10} color="gray.650" >Quais seus <strong>desejos e necessidades?</strong></Text>
        <Text mb={4} fontSize="xs" color="gray.250">Conta pra gente um pouco do que você pensa como cantinho ideal</Text>
        <QuizElementTextArea
          placeholder="Ex: Gostaria muito de uma mesa de jantar com 6 lugares. Preciso de um sofá-cama para a sala."
          name="necessidades"
        />
        {children}
      </Box>
    </>
  )
}