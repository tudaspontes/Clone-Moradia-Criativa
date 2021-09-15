import { Flex, Image, Spinner } from '@chakra-ui/react'
import { useState } from 'react'
import { FlexboxSection } from '../../Common/FlexboxSection'
import { MotionButton } from '../../Common/Motion/MotionButton'
import { ContentText } from '../../Common/Texts/ContentText'
import { SubtitlePreText } from '../../Common/Texts/SubtitlePreText'
import { TitleSectionText } from '../../Common/Texts/TitleSectionText'
import { ChangePhoto } from './ChangePhoto'




export function BeforeAfter({ data }) {

  const [presentPhoto, setPresentPhoto] = useState(data[0].data.depois.url)

  return (
    <FlexboxSection
      flexDir="column"
      w="100%"
      mb="14"
    >
      <Flex
        flexDir="column"
        textAlign="center"
        w={["100%", "100%"]}
        margin="0 auto"
      >
        <SubtitlePreText text="Vejá a incrível diferença" />
        <TitleSectionText text="Antes e Depois" />
      </Flex>

      <Flex
        w="100%"
        mt="8"
        align="center"
        flexDir={['column','column','column','row']}
      >

        <Flex
          w="100%"
          position="relative"
          h={["100%","40rem"]}
          mb={["12",0]}
        >
          <ChangePhoto
            change={setPresentPhoto}
            data={data}
          />

          {!presentPhoto
            ? <Spinner />
            :
            <Image
              src={presentPhoto}
              w="100%"
              h="100%"
              objectFit="contain"
            />
          }

        </Flex>

        <Flex
          w="100%"
          px={["0","16"]}
        >
          <Flex
            flexDir="column"
            align="flex-start"
            w={["100%", "100%", "100%", "500px"]}
          >

            <TitleSectionText text={data[0].data.title} />

            {data[0].data.content &&
              <ContentText text={data[0].data.content} />
            }


            <MotionButton
              bg="teal.450"
              color="gray.50"
              fontSize="small"
              textTransform="uppercase"
              borderRadius="0"
              mt="8"
              px="6"

              _focus={{
                boxShadow: 'none'
              }}
              _hover={{
                filter: 'brightness(0.9)'
              }}

              _active={{
                bg: 'orange.50'
              }}

              //motion
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.025 }}
            >
              Veja mais Projetos
            </MotionButton>


          </Flex>
        </Flex>

      </Flex>
    </FlexboxSection>
  )
}