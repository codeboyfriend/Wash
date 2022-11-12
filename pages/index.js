import styles from '../css/style.module.css';
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <div className={styles.container}>
      <Box className={styles.login}>
        <Heading 
          fontSize={'1.3rem'}
          fontWeight={'500'}
          display={'block'}
        >Create an Account</Heading>
        <Text>Kindly fill out your details correctly.</Text>

        <form>
          <label>Name</label>
          
        </form>
      </Box>
    </div>
  )
}
