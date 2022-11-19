import { useContext  } from 'react';
import washieContext from '../context/WashieContext';
import styles from '../css/style.module.css';

import {
    Box,
    Text,
    Radio,
    RadioGroup,
    Stack 
} from '@chakra-ui/react';

const Boxes = () => {
    const {
        value,
        setValue
    } = useContext(washieContext);

    const option = {
        fontSize: '.8rem'
    }

  return (
    <Box className={styles.font} sx={{
        padding: ['.5rem', '1rem']
      }}>
      <Box>
        <Text sx={{
            fontWeight: '600'
        }}>Color Preference</Text>

        <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row'>
                <Radio sx={{
                    fontSize: '.9rem'
                }} value='1'>Colored clothes</Radio>
                <Radio value='2'>White clothes</Radio>
            </Stack>
        </RadioGroup>
      </Box>
    </Box>
  )
}

export default Boxes
