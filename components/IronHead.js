import styles from '../css/style.module.css';
import {
    Box,
    Text
} from '@chakra-ui/react';

import { 
    FaArrowAltCircleLeft 
} from 'react-icons/fa';

const IronHead = () => {
  return (
    <Box className={styles.font}
    sx={{
      backgroundColor: "#007500",
      color: '#fff',
      padding: '1rem'
    }}>
      <a href='/home'>
      <Text
        sx={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            cursor: 'pointer'
        }}
      >{<FaArrowAltCircleLeft />}</Text>
      </a>

      <Text sx={{
        fontSize: '1.3rem',
        marginBottom: '.4rem'
      }}>Ironing Preferences</Text>

      <Text sx={{
            fontSize: '.8rem'
          }}>Kindly pick your choice</Text>
    </Box>
  )
}

export default IronHead
