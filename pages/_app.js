import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { WashieProvider } from '../context/WashieContext';

function MyApp({ Component, pageProps }) {
  return (
    <WashieProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </WashieProvider>
  )
}

export default MyApp
