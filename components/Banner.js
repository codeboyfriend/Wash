import { 
  Box,
  Text 
} from "@chakra-ui/react";

const Banner = () => {
  return (
    <Box sx={{
        padding: ['.5rem', '1rem'],
        display: 'flex',
        borderRadius: '10px'
      }}>
      <Box sx={{
        bgColor: "#007500",
        color: '#fff',
        w: '50%'
      }}>
        <Text>10%</Text>
        <Text>Discount on all orders from 1st of December - 31 of January </Text>
      </Box>
      <Box>
        <img src='/banner.jpg' alt="" />
      </Box>
    </Box>
  )
}

export default Banner
