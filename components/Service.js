import styles from '../css/style.module.css';
import { 
    Box,
    Text 
} from "@chakra-ui/react";

import { 
    MdIron,
    MdDryCleaning
} from "react-icons/md" 

import { 
    GiWashingMachine,
    GiSewingNeedle
} from "react-icons/gi"

import Link from 'next/link';

const Service = () => {
    const boxStyle = {
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'centre',
        alignItems: 'center',
        borderRadius: '5px',
        padding: ['3.5rem 1.5rem', '4rem 2rem'],
        cursor: 'pointer'
    }

    const size = {
        fontSize: '.9rem'
    }

    const iconStyles = {
        fontSize: '1.5rem',
        padding: '8px',       
        borderRadius: '100%',
        marginBottom: '.5rem'
    }

  return (
    <Box 
      className={styles.font}
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: ['1rem', '2rem'],
        padding: ['.5rem', '1rem']
      }}
    >
      <Link href='/wash'>
        <Box 
          className="boxes"
          sx={boxStyle}
          border='2px solid pink'
          color={'rgb(255, 149, 167)'}
        >
          <Text sx={iconStyles} border="1px solid rgb(255, 192, 203)"><GiWashingMachine /></Text>
          <Text sx={size}>Wash&Iron</Text>
        </Box>
      </Link>

      <Link href={'/iron'}>
        <Box 
          className="boxes"
          sx={boxStyle}
          border='2px solid rgba(0, 117, 0, 0.5)'
          color={'#007500'}
        >
          <Text sx={iconStyles} border="1px solid rgba(0, 117, 0, 0.5)"><MdIron /></Text>
          <Text sx={size}>Iron</Text>
        </Box>
      </Link>

      <Box 
        className="boxes"
        sx={boxStyle}
        border='2px solid rgba(57, 57, 172, 0.5)'
        color={'#3939ad'}
      >
        <Text sx={iconStyles} border="1px solid rgba(57, 57, 172, 0.5)"><MdDryCleaning /></Text>
        <Text sx={size}>Dry cleaning</Text>
      </Box>

      <Box 
        className="boxes"
        sx={boxStyle}
        border='2px solid rgba(255, 165, 0, 0.5)'
        color={'rgb(255, 165, 0)'}
      >
        <Text sx={iconStyles} border="1px solid rgba(255, 165, 0, 0.5)"><GiSewingNeedle /></Text>
        <Text sx={size}>Darning</Text>
      </Box>
    </Box>
  )
}

export default Service
