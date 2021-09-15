// TODO: ADICIONAR O DOMÍNIO DO FACEBOOK PARA PODER FAZER A AUTH COM ELE.

import { auth, firebase } from '../../services/firebase'

import { Flex, Stack, Input, Button, Text, Icon } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { SubmitHandler, useForm } from 'react-hook-form';
import { QuizNav } from "../../components/Quiz/QuizNav";
import { useRouter } from 'next/dist/client/router';

type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter()

  const { register, handleSubmit, formState } = useForm({
  })

  const handleSignIn:SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const providerGoogle = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(providerGoogle).then(result => {
        
      router.push(`/dashboard`)
    })
    
  }  

  return(
    <>
    <QuizNav />
    <Flex>
      <Flex
        as="form"
        width="100%"
        maxWidth={375} margin="0 auto"
        p="8"
        borderRadius={0}
        flexDir="column"
        onSubmit={() => handleSignIn}
      >
        <Stack spacing="2">
          <Text
            my={5}
            fontWeight="500"
          >
            Entre com sua conta!
          </Text>
          <Text fontSize="sm" >e-mail / cpf</Text>
          <Input
            name="email"
            type="email"
            label="E-mail"
            variant="filled"
            borderRadius="0"
            size="md"
            bg="gray.50"
            fontSize={12}
            placeholder="Digite seu e-mail ou cpf"
          />
          <Text fontSize="sm" >senha</Text>
          <Input
            name="password"
            type="password"
            label="Senha"
            variant="filled"
            borderRadius="0"
            size="md"
            bg="gray.50"
            fontSize={12}
            placeholder="Digite sua senha"
          />
        </Stack>
        <Button
          type="submit"
          my="5"
          bg="orange.50"
          color="white"
          size="lg"
          borderRadius="0"
          fontSize="md"
          _hover={{ filter: "brightness(0.9)" }}
          transition="filter 0.2s"
        >
          
          ENTRAR</Button
        >
        <Text fontSize="xs" color="gray.750" >Esqueceu sua senha?</Text>
        <Text my={5} align="center" color="gray.750" >OU</Text>
        <Button
          type="submit"
          mt="6"
          color="gray.600"
          size="lg"
          borderRadius="0"
          fontSize="md"
          isLoading={formState.isSubmitting}
          _hover={{ filter: "brightness(0.9)" }}
          transition="filter 0.2s"
          onClick={handleSubmit(handleSignIn)}
        >
          <Icon as={FcGoogle}
                w={8}
                h={8}
                mr={4}
          />ENTRAR COM GOOGLE
        </Button>
        <Button
          isDisabled
          type="submit"
          mt="6"
          bg="#3b5999"
          color="white"
          size="lg"
          borderRadius="0"
          fontSize="md"
          _hover={{ filter: "brightness(0.9)" }}
          transition="filter 0.2s"
          onClick={() => handleSignIn}
        >
          <Icon 
            as={ImFacebook}
            w={6}
            h={6}
            mr={4}
          />ENTRAR COM FACEBOOK
        </Button>
        <Text my={5} align="center" fontSize={12} 
        fontWeight="500"  >Novo por aqui? Crie sua conta</Text>
      </Flex>
    </Flex>
    </>
  )
}