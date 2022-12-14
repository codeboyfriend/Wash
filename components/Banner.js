import { 
  Box,
  Text
} from "@chakra-ui/react";
import styles from '../css/style.module.css';

const Banner = () => {
  return (
    <Box className={styles.font} sx={{
        h: ['200px', '300px'],
        padding: ['.5rem', '1rem'],
        display: 'flex',
        borderRadius: '100px'
      }}>
      <Box sx={{
        bgColor: "#007500",
        color: '#fff',
        w: '50%',
        padding: ['1.2rem', '2rem'],
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
      }}>
        <Text sx={{
          fontSize: ['1.2rem', '2rem'],
          marginBottom: '.5rem'
        }}>10%</Text>
        <Text sx={{
          fontSize: ['.8rem', '1rem']
        }}>Discount on all orders from 1st of December - 31st of January </Text>
      </Box>
      <Box className={styles.rightBanner} sx={{
        w: '50%',
        color: 'white',
        fontSize: ['1.2rem', '2rem']
      }}>
        Washie
      </Box>
    </Box>
  )
}

export default Banner
