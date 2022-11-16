import styles from '../css/style.module.css';
import { 
  Box,
  Text,
  Avatar,
  AvatarBadge
} from '@chakra-ui/react';
import { FaHandsWash } from "react-icons/fa"
import { useState } from 'react';

const Header = () => {
  const [hour, setHour] = useState()
  const [min, setMin] = useState()
  // let time = new Date();

  setTimeout(() => {
    let time = new Date()

    setHour(time.getHours());
    setMin(time.getMinutes());

  }, 1000);



  return (
    <Box  
      className={styles.font}
      sx={{
        backgroundColor: "#007500",
        color: '#fff',
        padding: '1rem'
      }}>
      <Box sx={{
        marginBottom: '1.5rem'
      }}>
        <Text sx={{
          fontSize: '.9rem'
        }}>{`${hour}:${min}`}</Text>
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
        >
        <div className='boxes'>
          <Text sx={{
              fontWeight: '100',
              fontSize: '.8rem',
              marginBottom: '.6rem',
              wordSpacing: '.2rem'
          }}>Hello, <span style={{
            fontSize: '1.4rem',
            fontWeight: '500',
          }}>Mking</span> <FaHandsWash style={{
            fontSize: '1.4rem',
            display: 'inline'
          }} /></Text>
          <Text sx={{
            fontSize: '.8rem'
          }}>What would you love to do today?</Text>
        </div>
        
        <div className='boxes'>
          <Avatar size={'sm'} cursor='pointer' name='mking' src='/pp.png'>
            <AvatarBadge boxSize={'1.25em'} bg='green.500' />
          </Avatar>
        </div>
      </Box>
    </Box>
  )
}

export default Header
