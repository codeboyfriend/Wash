import { 
  Box,
  List,
  Text
} from "@chakra-ui/react";
import styles from '../css/style.module.css';
import { useContext } from 'react';
import washieContext from '../context/WashieContext';

const washOrder = () => {
  const { 
    color
  } = useContext(washieContext)

  const box = {
    marginBottom: '2rem',
    backgroundColor: '#f5f5f5',
    padding: ['.5rem', '1rem'],
    borderRadius: '10px'
  }

  const head = {
    fontWeight: '600',
    marginBottom: '.5rem'
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
      </Box>      
    </Box>
  )
}

export default washOrder;