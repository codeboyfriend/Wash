import styles from '../css/style.module.css';
import { 
  Box, 
  Heading, 
  Text, 
  Stack,
  Input,
  InputGroup,
  InputRightAddon,
  InputLeftAddon 
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

export default function Home() {
  const [countryCode, setCountryCode] = useState('+234');
  const [show, setShow] = useState(true);

  const box = {
    display: 'flex'
  }

  return (
    <div className={styles.container}>
      <Stack 
        spacing={3} 
        sx={box} 
        className={styles.login}
      >
        <Box>
          <Heading 
            fontSize={'1.3rem'}
            fontWeight={'500'}
            display={'block'}
          >Create an Account</Heading>
        </Box>

        <Box>
          <Text>Kindly fill out your details correctly.</Text>
        </Box>

        <Stack spacing={3}>
          <div>
            <label>Name</label>
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
            <label>Email Address</label>
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
            <label>Phone Number</label>
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
            <label>Password</label>
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
                pointerEvents={''}
                children={show ? <ViewIcon color={'gray.600'} /> : <ViewOffIcon color={'gray.600'} />}
                onClick={() => setShow(!show)}
              />
            </InputGroup>
          </div>
        </Stack>
      </Stack>
    </div>
  )
}
