import { SimpleGrid } from "@chakra-ui/react";
import { useData } from "../../hooks/useData";
import { QuizElementImageStyle } from "./QuizElementImageStyle";

export function QuizElementImageStyleGroup() {

  const dataContext = useData()
  return (
    <>
      <SimpleGrid columns={2} gap={2}>
        <QuizElementImageStyle
          valueImg="divertido"
          image="/steps/step2/divertido.jpeg"
          title="Divertido"
          onClick={() => dataContext.setValues({ estilo: "Divertido" })}
        />
        <QuizElementImageStyle
          valueImg="industrial"
          image="/steps/step2/industrial.jpeg"
          title="Industrial"
          onClick={() => dataContext.setValues({ estilo: "Industrial" })}
        />
        <QuizElementImageStyle
          valueImg="minimalista"
          image="/steps/step2/minimalist.jpeg"
          title="Minimalista"
          onClick={() => dataContext.setValues({ estilo: "Minimalista" })}
        />
        <QuizElementImageStyle
          valueImg="pratico"
          image="/steps/step2/pratico.jpeg"
          title="Prático"
          onClick={() => dataContext.setValues({ estilo: "Prático" })}
        />
        <QuizElementImageStyle
          valueImg="romantico"
          image="/steps/step2/romantic.jpeg"
          title="Romantico"
          onClick={() => dataContext.setValues({ estilo: "Romantico" })}
        />
        <QuizElementImageStyle
          valueImg="sofisticado"
          image="/steps/step2/sofisticado.jpeg"
          title="Sofisticado"
          onClick={() => dataContext.setValues({ estilo: "Sofisticado" })}
        />
      </SimpleGrid>
    </>
  )
}

