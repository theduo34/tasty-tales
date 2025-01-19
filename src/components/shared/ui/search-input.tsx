'use client';

import {FormControl, InputAdornment, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const SearchInput = ({placeholder, onChange}: {
  placeholder: string,
  onChange: (value: string) => void,
}) => {
  return (
    <form noValidate autoComplete="off" className="flex w-full">
      <FormControl sx={{width: '100%', borderRadius: '50px', overflow: 'hidden'}}>
        <OutlinedInput
          id="search-input"
          fullWidth
          placeholder={placeholder}
          onChange={() => onChange}
          className={"caret-tasty-primary-400"}
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon/>
              </IconButton>
            </InputAdornment>
          }
          sx={{
            borderRadius: '50px',
            height: '48px',
            padding: '0 8px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#ccc',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#999',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#727070',
            },
          }}
        />
      </FormControl>
    </form>
  )
}
export default SearchInput;