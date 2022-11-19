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
    Button 
} from '@chakra-ui/react';

const Boxes = () => {
    const {
        other,
        setOther,
        color,
        setColor,
        temperature,
        setTemperature,
        order,
        setOrder
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
                <Radio sx={{
                    fontSize: '.7rem'
                }} value='colored clothes'>Colored clothes</Radio>
                <Radio value='white clothes'>White clothes</Radio>
            </Stack>
        </RadioGroup>
      </Box>

      <Box sx={box}>
        <Text sx={head}>Washing Temperature</Text>

        <RadioGroup onChange={setTemperature} value={temperature}>
            <Stack sx={options} direction='row'>
                <Radio sx={{
                    fontSize: '.9rem'
                }} value='celius degree'>Celius degree</Radio>
                <Radio value='fahrenhite degree'>Fahrenhite degree</Radio>
            </Stack>
        </RadioGroup>
      </Box>

      <Box sx={box}>
        <Text sx={head}>Other</Text>

        <RadioGroup onChange={setOther} value={other}>
            <Stack sx={options} marginBottom={'.5rem'} direction='row'>
                <Radio sx={{
                    fontSize: '.9rem'
                }} value='use softner'>Use Softner</Radio>
                <Radio value='bleaching agent'>Bleaching Agent</Radio>
            </Stack>

            <Stack sx={options} direction='row'>
                <Radio sx={{
                    fontSize: '.9rem'
                }} value='dry heater'>Dry heater</Radio>
                <Radio value='secented detergent'>Secented detergent</Radio>
            </Stack>
        </RadioGroup>
      </Box>

      <Box sx={box}>
        <Text sx={head}>Additional note</Text>
        <Textarea></Textarea>
      </Box>

      <Box sx={box}>
      <RadioGroup onChange={(e) => {
        
        setOrder(!order)}
      } value={order}>
            <Stack sx={options} direction='row'>
                <Radio sx={{
                    fontSize: '.9rem'
                }} value='customize order'>Customize Order</Radio>
            </Stack>
        </RadioGroup>              
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
