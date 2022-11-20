import styles from '../css/style.module.css';
import {
    Box,
    Text
} from '@chakra-ui/react';

import { 
    FaArrowAltCircleLeft 
} from 'react-icons/fa';

import Link from 'next/link';

const Head = () => {
  return (
    <Box className={styles.font}
    sx={{
      backgroundColor: "#007500",
      color: '#fff',
      padding: '1rem'
    }}>
      <Link href='/home'>
        <Text
          sx={{
            fontSize: '1.5rem',
            marginBottom: '1rem',
            cursor: 'pointer'
          }}
        >{<FaArrowAltCircleLeft />}</Text>
      </Link>

      <Text sx={{
        fontSize: '1.3rem',
        marginBottom: '.4rem'
      }}>Washing Preferences</Text>

      <Text sx={{
            fontSize: '.8rem'
          }}>Kindly pick your choice</Text>
    </Box>
  )
}

export default Head
