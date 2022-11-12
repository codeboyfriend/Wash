import {
  RiTShirtAirFill
} from "react-icons/ri";

import {
    Text
} from "@chakra-ui/react";

const Logo = () => {
  return (
    <div>
      <Text sx={{
        color: '#007500',
        marginBottom: '.5rem'
      }}><RiTShirtAirFill style={{
        padding: '5px',
        fontSize: '2rem',
        border: '2px solid #007500',
        borderRadius: '100%'
      }} /></Text>
    </div>
  )
}

export default Logo
