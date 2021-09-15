
import { useRouter } from 'next/dist/client/router'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import { PreNav } from '../components/Navigation/PreNav'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { PosFooterLogo } from '../components/Footer/PosFooterLogo'
import { NewsLetter } from '../components/Index/NewsLetter'
import { QuizNav } from '../components/Quiz/QuizNav'

import { SidebarDrawerProvider } from "../hooks/useSidebarDrawer"

import '../styles/global.css'
import { theme } from '../styles/theme'
import { AuthContextProvider } from '../hooks/useAuth'

function MyApp({ Component, pageProps }: AppProps) {

  const { asPath } = useRouter()
  const isQuizPath = asPath === '/quiz';
  const isIndexPath = asPath === '/'
  const isLoginPath = asPath === '/login'


  return (
    <ChakraProvider resetCSS theme={theme}>
      <AuthContextProvider>
        <SidebarDrawerProvider>
          {isIndexPath &&
            <>
              <PreNav />
              <Navigation />
            </>
          }

          {isQuizPath && <QuizNav />}
          
          <Component {...pageProps} />

          {(isQuizPath || isIndexPath || isLoginPath) &&
            <>
              <NewsLetter />
              <Footer />
              <PosFooterLogo />
            </>
          }                  
        </SidebarDrawerProvider>
      </AuthContextProvider>      
    </ChakraProvider>
  )
}

export default MyApp
