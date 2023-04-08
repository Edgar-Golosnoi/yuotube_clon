import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="ctnter"
      p={2}
      sx={{ position: 'stocky', background: '#000', top: 0, justifyContent: 'space-between' }}
    >

      <Link to="/" stile={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
