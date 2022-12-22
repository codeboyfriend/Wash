import Header from "../components/Header";
import Search from "../components/Search";
import Banner from "../components/Banner";
import Service from "../components/Service";

import { useContext } from "react";
import washieContext from "../context/WashieContext";

import { 
  Box,
  Image,
  Button 
} from "@chakra-ui/react";

const Home = () => {
  const {
    showDp,
    setShowDp,
    handleClick
  } = useContext(washieContext);

  return (
    <Box onClick={() => setShowDp(false)}>
      <Header />
      <Search />
      <Banner />
      <Service />

      {
        showDp && <Box onScroll={() => console.log('testing')} className="modal" sx={{
          w: '100vw',
          h: '100vh',
          pos: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          flexDir: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backdropFilter: 'blur(5px)'
        }}>
          <Image 
            sx={{
              boxSize: ['300px', '450px']
            }}
            objectFit={'cover'}
            borderRadius={'10px'}
            src='/pp.png' 
          />

          <Button onClick={handleClick}  colorScheme={'green'} size={'sm'} sx={{
              backgroundColor: '#007500',
              color: '#fff',
              fontWeight: '500',
              fontSize: '.9rem',
              marginTop: '1rem'
            }}>Change</Button>
        </Box>
      }
    </Box>
  )
}

export default Home
