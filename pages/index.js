import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Header } from '../components/Header.js';

import { aboutObj } from '../utils/Data.js'

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Header {...aboutObj}/>
        
      </Box>
    </Container>
  );
}