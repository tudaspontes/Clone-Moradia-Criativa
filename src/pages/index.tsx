import { Box, BoxProps, Button, ButtonProps, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { RichText } from 'prismic-dom';
import Prismic from '@prismicio/client'

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { CallToAction } from '../components/Index/CallToAction';
import { SliderSection } from '../components/Index/Slider';
import { BeforeAfter } from '../components/Index/BeforeAfter';
import { SectionContent } from '../components/SectionContent';
import { MobileItem } from '../components/Index/MobileItem';
import { Header } from '../components/Index/Header';
import { Statistics } from '../components/Index/Statistics';
import { Steps } from '../components/SectionContent/Steps';

import { SEO } from '../utils/seo'
import { BlogItemData, TestimonialsData } from '../utils/types';

import { getPrismicClient } from '../services/prismic';
import { Testimonials } from '../components/Index/Testimonials';

interface HomeProps {
  blogData: BlogItemData[];
  testimonialsData: TestimonialsData[];
  projectsData: [];
  stepsData: [];
  beforeAfterData: {}
}


export default function Home({ blogData, testimonialsData, projectsData, beforeAfterData, stepsData }: HomeProps) {


  console.log(beforeAfterData)

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <SEO />

      <Header />

      <Flex
        flexDir="column"
      >
        <Steps data={stepsData} />

        <Statistics />

        <BeforeAfter data={beforeAfterData} />


        <CallToAction
          image="callAction.jpg"
          text="Pronto para transformar seu ambiente?"
          subText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eaque repellat, ratione eum labore voluptatibus? Similique delectus tempore vel a."
        />

        <SectionContent
          preText="Seguro e sem preocupação!"
          title="Novos projetos em todo lugar do Brasil"
          content="Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim."
          image="/brasil.png"
          heightImage="32.5rem"
        />

        <Testimonials
          data={testimonialsData}
        />

        {isWideVersion &&
          < MobileItem />
        }

        <SliderSection
          data={projectsData}
          type="projects"
          title="Nossos Projetos"
          autoplay
          slidesToShowScrol={1}
        />

      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prismic = getPrismicClient();

  const responseBlog = await prismic.query([
    Prismic.predicates.at('document.type', 'blog'),
  ], {
    pageSize: 4,
    orderings: '[document.last_publication_date desc]'
  })

  const responseTestimonials = await prismic.query([
    Prismic.predicates.at('document.type', 'testimonials')
  ], {
    pageSize: 4,
    orderings: '[document.last_publication_date desc]'
  })

  const responseSteps = await prismic.query([
    Prismic.predicates.at('document.type', 'steps')
  ])

  const responseProjects = await prismic.query([
    Prismic.predicates.at('document.type', 'projects')
  ], {
    pageSize: 4,
    orderings: '[document.last_publication_date desc]'
  })

  const responseBeforeAfter = await prismic.query([
    Prismic.predicates.at('document.type', 'beforeafter')
  ], {
    pageSize: 4,
    orderings: '[document.last_publication_date desc]'
  })


  const testimonialsData = responseTestimonials.results.map<TestimonialsData>(item => {
    return {
      uid: item.uid,
      data: {
        title: RichText.asText(item.data.title),
        content: RichText.asText(item.data.content),
        city: item.data.city,
        image: {
          url: item.data.image.url
        }
      }
    }
  })

  const beforeAfterData = responseBeforeAfter.results.map(item => {
    return {
      uid: item.uid,
      data: {
        title: RichText.asText(item.data.title),
        content: RichText.asText(item.data.content),
        antes: {
          url: item.data.antes.url
        },
        depois: {
          url: item.data.depois.url
        }
      }
    }
  })

  const stepsData = responseSteps.results.map(item => {
    return {
      uid: item.uid,
      data: {
        title: RichText.asText(item.data.title),
        content: RichText.asText(item.data.content)
      }
    }
  })

  const blogData = responseBlog.results.map<BlogItemData>(post => {
    return {
      uid: post.uid,
      lastPublicationDate: format(new Date(String(post.last_publication_date)), 'dd MMMM, yyyy', { locale: ptBR }),
      data: {
        titulo: RichText.asText(post.data.titulo),
        banner: {
          url: post.data.banner.url,
          alt: post.data.banner.alt,
        },
        content: {
          excerpt: post.data.content.map(content => {
            return content.body.find(content => content.type === 'paragraph')?.text ?? ''

          })
        }
      },
    }
  })

  const projectsData = responseProjects.results.map(item => {
    return {
      uid: item.uid,
      lastPublicationDate: format(new Date(String(item.last_publication_date)), 'dd MMMM yyyy', { locale: ptBR }),
      data: {
        title: RichText.asText(item.data.title),
        imageprimary: {
          url: item.data.imageprimary.url,
          alt: item.data.imageprimary.alt
        },
        secoundimage: {
          url: item.data.imageprimary.url,
          alt: item.data.imageprimary.alt
        }
      },
    }
  })

  return {
    props: {
      blogData,
      testimonialsData,
      projectsData,
      responseProjects,
      stepsData,
      beforeAfterData
    }
  }
}