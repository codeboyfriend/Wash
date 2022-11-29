import { useState, useContext } from 'react';
import styles from '../css/style.module.css';
import Logo from '../components/Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import washieContext from '../context/WashieContext';

import { 
  Box, 
  Heading, 
  Text, 
  Stack,
  Input,
  InputGroup,
  InputRightAddon,
  InputLeftAddon, 
  Button,
  Spinner,
  useToast
} from '@chakra-ui/react';

import { 
  PhoneIcon,
  ViewIcon,
  ViewOffIcon,
  EditIcon 
} from "@chakra-ui/icons";

import { 
  FaEnvelope,
  FaKey 
} from "react-icons/fa";

import { app } from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Home() {
  let auth = getAuth();
  const router = useRouter();
  const [countryCode, setCountryCode] = useState('+234');
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [msg, setMsg] = useState('');
  const toast = useToast();

  const {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword
  } = useContext(washieContext);

  const createUser = () => {
    if (password.length >= 8) {
      setIsLoading(true);
    
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          router.push('/home');
          setIsLoading(false);
          setEmail('');
          setPassword('');
        })
        .catch((error) => {
          console.log(error.message)
          setEmail('');
          setPassword('');
          setIsLoading(false);
        })
    } else {
      // setTimeout(setMsg('Password is too short'), 1000)
      setShowToast(true);
      setMsg('Password is too short');
      console.log('password is too short');
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
        <Box>
          <Heading 
            fontSize={'1.3rem'}
            fontWeight={'500'}
            marginBottom={'1.5'}
          >Create an Account</Heading>
        </Box>

        <Box>
          <Text
            fontSize={'.8rem'}
            marginBottom={'3'}
          >Kindly fill out your details correctly.</Text>
        </Box>

        <Stack spacing={3}>
          <div>
            <label
              style={{
                fontSize: '.8rem'
              }}
            >Username</label>
            <InputGroup>
              <InputLeftAddon 
                pointerEvents={'none'}
                children={<EditIcon color={'gray.600'} />}
              />
              <Input 
                type='text'
                placeholder='Enter username' 
                name='name' 
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                sx={{
                  fontSize: '.9rem'
                }}
              />
            </InputGroup>
          </div>

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
                placeholder='washie@gmail.com' 
                sx={{
                  fontSize: '.9rem'
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </div>

          <div>
            <label
              style={{
                fontSize: '.8rem'
              }}
            >Phone Number</label>
            <InputGroup>
              <InputLeftAddon
                pointerEvents={'none'}
                children={countryCode}
              />
              <Input 
                type='number'
                placeholder='9000000000' 
                name='number' 
                sx={{
                  fontSize: '.9rem'
                }}
              />
              <InputRightAddon
                pointerEvents={'none'}
                children={<PhoneIcon color={'gray.600'} />}
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

          <Button onClick={() => createUser()} colorScheme={'green'} size={'md'} sx={{
              backgroundColor: '#007500',
              color: '#fff',
              fontWeight: '500',
              fontSize: '.9rem'
            }}>Sign up</Button>
        </Stack>

        <Text sx={{
          fontSize: '.9rem',
          marginTop: '1rem'
        }}>Already have an account? <Link href="/login"><span className={styles.login}>Login</span></Link>
        </Text>

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

        {
          showToast && toast({
            description: "Password is too short",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }
      </Box>
    </div>
  )
}
