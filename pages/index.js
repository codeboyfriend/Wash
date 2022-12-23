import { useState, useEffect, useContext } from 'react';
import Logo from '../components/Logo';
import washieContext from '../context/WashieContext';
import styles from '../css/style.module.css';

import { 
  Box,
  Text, 
  Stack,
  Input,
  InputGroup,
  InputRightAddon,
  InputLeftAddon, 
  Button,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';

import {
  ViewIcon,
  ViewOffIcon
} from "@chakra-ui/icons";

import { 
  FaEnvelope,
  FaKey 
} from "react-icons/fa";

import { useRouter } from 'next/router';
import { app } from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";

const login = () => {
  let auth = getAuth();
  const currUser = auth.currentUser;
  const router = useRouter();
  const { 
    email,
    setEmail,
    password,
    setPassword,
    setUser
  } = useContext(washieContext)
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [msg, setMsg] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        setUser(currUser)
      } else {
        setUser('error')
      }
    })
  }, [])
  

  const signinUser = () => {
    if (password.length >= 8) {
      setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          router.push('/home');
          setIsLoading(false);
          setEmail('');
          setPassword('');
        })
        .catch((error) => {
          setMsg(true);
            setTimeout(function () {
              setMsg(false)
            }, 1500)
          setIsLoading(false);
          console.log(error.code)
        })
    } else {
      setShowError(true);
      setTimeout(function () {
        setShowError(false)
      }, 1000)
    }
  }
  
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

          <Button onClick={() => signinUser()} colorScheme={'green'} size={'md'} sx={{
            backgroundColor: '#007500',
            color: '#fff',
            fontWeight: '500',
            fontSize: '.9rem'
          }}>Login</Button>
        </Stack>

        <Text sx={{
          fontSize: '.9rem',
          marginTop: '1rem'
        }}>Don't have an account? <a href="/signup"><span className={styles.login}>Sign up</span></a></Text>

        {
          isLoading && <Box sx={{
            w: '100vw',
            h: '100vh',
            pos: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(5px)'
          }}>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='rgb(0, 117, 0)'
              size='xl'
            />
          </Box>
        }

        {showError && <Box sx={{
            w: '100vw',
            h: '100vh',
            pos: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(5px)'
          }}>
            <Alert 
              status='error' 
              variant={'solid'}
              w={'300px'}
            >
              <AlertIcon />
              <AlertDescription>Password is too short</AlertDescription>
            </Alert>
          </Box>
        }

        {msg && <Box sx={{
            w: '100vw',
            h: '100vh',
            pos: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(5px)'
          }}>
            <Alert 
              status='error' 
              variant={'solid'}
              w={'300px'}
            >
              <AlertIcon />
              <AlertDescription>Failed to login in! Try again.</AlertDescription>
            </Alert>
          </Box>
        }
      </Box>
    </div>
  )
}

export default login
