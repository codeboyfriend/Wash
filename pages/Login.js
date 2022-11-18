import styles from '../css/style.module.css';
import { 
  Box,
  Text, 
  Stack,
  Input,
  InputGroup,
  InputRightAddon,
  InputLeftAddon, 
  Button
} from '@chakra-ui/react';
import {
  ViewIcon,
  ViewOffIcon
} from "@chakra-ui/icons";
import { 
  FaEnvelope,
  FaKey 
} from "react-icons/fa";
import { useState } from 'react';
import Logo from '../components/Logo';
import { useContext } from 'react';
import washieContext from '../context/WashieContext';

const login = () => {
  const { 
    email,
    setEmail,
    password,
    setPassword
  } = useContext(washieContext)
  const [show, setShow] = useState(true);
  
  return (
    <div className={styles.container}>
      <Box 
        spacing={3} 
        sx={{
          maxW:'300px',
          display: 'flex',
          flexDir: 'column',
        }}
      >      
        <Logo />

        <Stack spacing={3}>          
          <div>
            <label
              style={{
                fontSize: '.8rem'
              }}
            >Email Address</label>
            <InputGroup>
              <InputLeftAddon
                pointerEvents={'none'}
                children={<FaEnvelope color={'gray.600'} />}
              />
              <Input 
                type='email'
                value={email}
                placeholder='washie@gmail.com' 
                sx={{
                  fontSize: '.9rem'
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </div>
          
          <div>
            <label
              style={{
                fontSize: '.8rem'
              }}
            >Password</label>
            <InputGroup>
              <InputLeftAddon
                pointerEvents={'none'}
                children={<FaKey color='gray.600' />}
              />
              <Input 
                type={show ? 'password' : 'text'}
                placeholder='at least 8 characters' 
                name='number' 
                sx={{
                  fontSize: '.9rem'
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightAddon
                cursor={'pointer'}
                pointerEvents={''}
                children={show ? <ViewIcon color={'gray.600'} /> : <ViewOffIcon color={'gray.600'} />}
                onClick={() => setShow(!show)}
              />
            </InputGroup>
          </div>

          <Button colorScheme={'green'} size={'md'} sx={{
            backgroundColor: '#007500',
            color: '#fff',
            fontWeight: '500',
            fontSize: '.9rem'
          }}>Login</Button>
        </Stack>

        <Text sx={{
          fontSize: '.9rem',
          marginTop: '1rem'
        }}>Don't have an account? <a href="/"><span className={styles.login}>Sign up</span></a></Text>
      </Box>
    </div>
  )
}

export default login
