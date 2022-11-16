import styles from '../css/style.module.css';
import { 
  Box, 
  Heading, 
  Text, 
  Stack,
  Input,
  InputGroup,
  InputRightAddon,
  InputLeftAddon, 
  Button
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
import { useState } from 'react';
import Logo from '../components/Logo';

export default function Home() {
  const [countryCode, setCountryCode] = useState('+234');
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
            >Name</label>
            <InputGroup>
              <InputLeftAddon 
                pointerEvents={'none'}
                children={<EditIcon color={'gray.600'} />}
              />
              <Input 
                type='text'
                placeholder='Enter Full Name' 
                name='name' 
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
          }}>Sign up</Button>
        </Stack>

        <Text sx={{
          fontSize: '.9rem',
          marginTop: '1rem'
        }}>Already have an account? <a href="/login"><span className={styles.login}>Login</span></a></Text>
      </Box>
    </div>
  )
}
