// criar a mensagem de alerta e estilizar.

import { Button, Flex, Image, Input, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { firestore, firebase } from "../../../services/firebase";

export function NewsLetter() {
	const [input, setInput] = useState('')

	const toast = useToast()
	
	function handleNewsletterInput(e) {
		setInput(e.target.value)
	}

	function handleNewsletterSubmit(e) {
		
		if(input) {
			firestore.collection("newsletter").add({
				email: input,
				time: firebase.firestore.FieldValue.serverTimestamp(),
			});
			
			setInput("");
		}
	}

	return (

	<Flex
		w="100%"
		py="20"
		px="6"
		bgGradient="linear(to-r, orange.50, pink.500)"s
		mt="20"

	>
		<Flex
			w="100%"
			flexDir="column"
			maxW="350px"
			margin="0 auto"
		>
			<Image
					src="/logo/logoBranco.svg"
					h="3.75rem"
					mb="2"
			/>
			<Text
					fontSize="0.875rem"
					color="white"
					textAlign="center"
					mt="6"
			>
					Cadastre-se para receber as melhores ofertas e novidades
			</Text>
			<Flex mt="8">
				<Input
					placeholder="Insira seu melhor e-mail"
					type="email"
					value={input}
					onChange={handleNewsletterInput}
					variant="unstyled"
					fontSize="small"
					bg="gray.50"
					px="6"
					borderRadius="0"
				/>
					<Button
						type="submit"
						onClick={() => handleNewsletterSubmit (
							toast({
								title: "Newsletter",
								description: "Obrigado por se inscrever :)",
								status: "success",
								duration: 9000,
								isClosable: true,
							}))}
						variant="unstyled"
						bg="orange.50"
						color="white"
						fontWeight="500"
						borderRadius="0"
						fontSize="small"
						px="8"
						w="200px"
					>
							CADASTRAR
					</Button>
					
			</Flex>
		</Flex>
	</Flex>
)
}