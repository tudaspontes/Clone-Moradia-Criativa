import { useState } from "react";

import { Flex } from "@chakra-ui/react";

import { SEO } from "../../utils/seo";

import { DataProvider } from '../../hooks/useData';
import { QuizStep1 } from '../../components/Quiz/QuizStep1';
import { QuizStep2 } from '../../components/Quiz/QuizStep2';
import { QuizStep3 } from '../../components/Quiz/QuizStep3';
import { QuizAcceptTerms } from '../../components/Quiz/QuizAcceptTerms';
import { Pagination } from '../../components/Quiz/QuizPagination';

export default function Quiz() {

  const [quizStep, setQuizStep] = useState(0)

  function nextQuizStep() {
    setQuizStep(quizStep +1)
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  
  function prevQuizStep() {
    setQuizStep(quizStep -1)
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
  
    <DataProvider>
      <SEO title="Quiz" />
      {(quizStep === 0) && (
        <QuizStep1>
          <Flex
          justify="space-around">
          <Pagination title="PRÓXIMO PASSO" onClick={nextQuizStep} />
          </Flex>
        </QuizStep1>
      )}
      {(quizStep === 1) && (
        <QuizStep2>
          <Flex
          justify="space-around">
          <Pagination title="VOLTAR UM PASSO" onClick={prevQuizStep} />
          <Pagination title="PRÓXIMO PASSO" onClick={nextQuizStep} />
          </Flex>
        </QuizStep2>
      )}
      {(quizStep === 2) && (
        <QuizStep3>
          <Flex
          justify="space-around">
          <Pagination title="VOLTAR UM PASSO" onClick={prevQuizStep} />
          <Pagination title="PRÓXIMO PASSO" onClick={nextQuizStep} />
          </Flex>
        </QuizStep3>
      )}
      {(quizStep === 3) && (
        <>
        <QuizAcceptTerms />
        </>
      )}
    </DataProvider>
  )
}