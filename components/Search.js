import { 
    Box,
    Input,
    InputLeftAddon,
    InputGroup
} from '@chakra-ui/react';

import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const Search = () => {
    const [searchInput, setSearchInput] = useState("");
  return (
    <Box sx={{
        padding: ['.5rem', '1rem']
    }}>
      <InputGroup>
        <InputLeftAddon children={<FaSearch />} />
        <Input
            variant={"filled"} 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={'search...'}
            sx={{
                color: "red"
            }}
        />
      </InputGroup>
    </Box>
  )
}

export default Search
