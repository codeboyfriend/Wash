import { useContext, useState  } from 'react';
import washieContext from '../context/WashieContext';
import styles from '../css/style.module.css';
import { useRouter } from 'next/router';

import {
    Box,
    Text,
    Radio,
    RadioGroup,
    Stack,
    Textarea,
    Button,
    Checkbox,
    CheckboxGroup ,
    Alert,
    AlertDescription,
    AlertIcon
} from '@chakra-ui/react';

const Boxes = () => {
    const router = useRouter();
    const [showError, setShowError] = useState(false);
    const {
        color,
        setColor,
        temperature,
        setTemperature,
        setOrder,
        setSoftner,
        setAgent,
        setHeater,
        setDetergent,
        note,
        setNote
    } = useContext(washieContext);

    const box = {
        marginBottom: '2rem',
        backgroundColor: '#f5f5f5',
        padding: ['.5rem', '1rem'],
        borderRadius: '10px'
      }

    const head = {
        fontWeight: '600',
        marginBottom: '.5rem'
    }

    const options = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    const buttonClick = () => {
        if (color !== '' && temperature !== '' && note !== '') {
            router.push('/washOrder');
            setShowError(false)
        } else {
            setShowError(true)

            setTimeout(function () {
                setShowError(false)
              }, 1500)
        }
    }

  return (
    <Box className={styles.font} sx={{
        margin: ['1rem', '1.5rem'],
        padding: ['.5rem', '1rem']  
      }}>
      <Box sx={box}>
        <Text sx={head}>Color Preference</Text>

        <RadioGroup onChange={setColor} value={color}>
        <Stack sx={options} direction='row'>
                <Radio 
                    size='sm' 
                    colorScheme="green"  
                    value='colored clothes'
                >Colored clothes</Radio>
                <Radio 
                    size='sm' 
                    colorScheme="green" 
                    value='white clothes'
                >White clothes</Radio>
            </Stack>
        </RadioGroup>
      </Box>

      <Box sx={box}>
        <Text sx={head}>Washing Temperature</Text>

        <RadioGroup onChange={setTemperature} value={temperature}>
            <Stack sx={options} direction='row'>
                <Radio 
                    size='sm' 
                    colorScheme="green" 
                    value='celius degree'
                >Celius degree</Radio>
                <Radio 
                    size='sm' 
                    colorScheme="green" 
                    value='fahrenhite degree'
                >Fahrenhite degree</Radio>
            </Stack>
        </RadioGroup>
      </Box>

      <Box sx={box}>
        <Text sx={head}>Other</Text>

        <CheckboxGroup>
            <Stack sx={options} marginBottom={'.5rem'} direction='row'>
                <Checkbox 
                    size='sm' 
                    colorScheme="green"
                    onChange={(e) => setSoftner(e.currentTarget.checked)}
                >Use Softner</Checkbox>
                <Checkbox 
                    size='sm' 
                    colorScheme="green"
                    onChange={(e) => setAgent(e.currentTarget.checked)}
                >Bleaching Agent</Checkbox>
            </Stack>

            <Stack sx={options} direction='row'>
                <Checkbox 
                    size='sm' 
                    colorScheme="green" 
                    onChange={(e) => setHeater(e.currentTarget.checked)}
                >Dry heater</Checkbox>
                <Checkbox  
                    size='sm' 
                    colorScheme="green"
                    onChange={(e) => setDetergent(e.currentTarget.checked)}
                >Secented detergent</Checkbox>
            </Stack>
        </CheckboxGroup>
      </Box>

      <Box sx={box}>
        <Text sx={head}>Additional note</Text>
        <Textarea
            value={note}
            onChange={(e) =>setNote(e.target.value)}
            placeholder="Enter short note"
            variant={'unstyled'}
            sx={{
                fontSize: '.9rem'
            }}
        ></Textarea>
      </Box>

      <Box sx={box}>
        <CheckboxGroup>
            <Stack sx={options} direction='row'>
                <Checkbox 
                    size='sm' 
                    colorScheme="green" 
                    onChange={(e) => setOrder(e.currentTarget.checked)} 
                    sx={{
                    fontSize: '.6rem'
                }}>Customize Order</Checkbox>
            </Stack>
        </CheckboxGroup>              
      </Box>

        <Button onClick={() => buttonClick()} colorScheme={'green'} size={'md'} sx={{
            w: '100%',
            backgroundColor: '#007500',
            color: '#fff',
            fontWeight: '500',
            fontSize: '1rem'
          }}>Next
        </Button>

        {showError && <Box sx={{
            w: '100vw',
            h: '100%',
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
              <AlertDescription>Enter necessary information</AlertDescription>
            </Alert>
          </Box>
        }
    </Box>
  )
}

export default Boxes
