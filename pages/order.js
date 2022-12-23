import { 
  Box,
  Text,
  Button
} from "@chakra-ui/react";
import styles from '../css/style.module.css';
import { useContext } from 'react';
import washieContext from '../context/WashieContext';
import { useRouter } from "next/router";

const washOrder = () => {
  const router = useRouter();
  const { 
    color,
    temperature,
    note,
    order,
    agent,
    detergent,
    softner,
    heater
  } = useContext(washieContext)

  const box = {
    marginBottom: '2rem',
    backgroundColor: '#f5f5f5',
    padding: ['.8rem', '1rem'],
    borderRadius: '10px'
  }

  const head = {
    fontWeight: '500',
    marginBottom: '.5rem'
  }

  const buttonClick = () => {
    router.push('/wash')
  }

  return (
    <Box className={styles.font}>
      <Box sx={{
        backgroundColor: '#007500',
        color: '#fff',
        padding: '.5rem',
        fontSize: '1.3rem'
      }}>Order Review</Box>

      <Box sx={{
      margin: '1rem',
      padding: ['.5rem', '1rem']  
    }}>
      <Box sx={box}>
        <Text sx={head}>Color Preference</Text>
        <Box sx={{
          paddingLeft: '2rem'
        }}>
          <ul>
            <li>{ color }</li>
          </ul>
        </Box>
      </Box>

      <Box sx={box}>
        <Text sx={head}>Washing Temperature</Text>
        <Box sx={{
          paddingLeft: '2rem'
        }}>
          <ul>
            <li>{ temperature }</li>
          </ul>
        </Box>
      </Box>

      <Box sx={box}>
        <Text sx={head}>Other</Text>
        <Box sx={{
          paddingLeft: '2rem'
        }}>
          <ul>
            {softner &&  <li>Softner</li>}
            {agent &&  <li>Bleaching Agent</li>}
            {heater &&  <li>Dry Heater</li>}
            {detergent &&  <li>Secented Detergent</li>}
          </ul>
        </Box>
      </Box>

      <Box sx={box}>
        <Text sx={head}>Additional note</Text>
        <Box sx={{
          padding: '.7rem'
        }}>
          { note }
        </Box>
      </Box>

      {
        order && <Box cursor={'pointer'} sx={box}>
          <Text onClick={() => buttonClick()} sx={{
            color: 'green',
            fontWeight: '600',
            fontSize: '.8rem'
          }}>Customize Order</Text>
        </Box>
      }

      <Button colorScheme={'green'} size={'md'} sx={{
            w: '100%',
            backgroundColor: '#007500',
            color: '#fff',
            fontWeight: '500',
            fontSize: '1rem'
          }}>Make Payment
        </Button>
      </Box>      
    </Box>
  )
}

export default washOrder;