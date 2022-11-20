import styles from '../css/style.module.css';
import { 
  Box,
  Text,
  Avatar,
  AvatarBadge
} from '@chakra-ui/react';
import { FaHandsWash } from "react-icons/fa";
import { useContext } from 'react';
import washieContext from '../context/WashieContext';

const Header = () => {
  const { 
    userName
  } = useContext(washieContext)
  return (
    <Box  
      className={styles.font}
      sx={{
        backgroundColor: "#007500",
        color: '#fff',
        padding: '1rem'
      }}>
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
          }}>{userName}</span> <FaHandsWash style={{
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
