import { useContext  } from 'react';
import washieContext from '../context/WashieContext';
import styles from '../css/style.module.css';

import {
    Box,
    Text,
    Radio,
    RadioGroup,
    Stack,
    Textarea,
    Button,
    Checkbox,
    CheckboxGroup 
} from '@chakra-ui/react';

const Boxes = () => {
    const {
        color,
        setColor,
        temperature,
        setTemperature,
        setOrder,
        setSoftner,
        setAgent,
        setHeater,
        setDetergent
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
        <Textarea></Textarea>
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

      <Button colorScheme={'green'} size={'md'} sx={{
            w: '100%',
            backgroundColor: '#007500',
            color: '#fff',
            fontWeight: '500',
            fontSize: '1rem'
          }}>Next</Button>
    </Box>
  )
}

export default Boxes
