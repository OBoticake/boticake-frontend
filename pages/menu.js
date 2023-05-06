import * as React from 'react';
import { Container, Box } from '@mui/material';
import { Header } from '../components/Header.js';
import { CustomTabs } from '../components/CustomTabs.js';
import { NavigationBar } from '../components/NavigationBar.js';

import { aboutObj, tabsObj } from '../utils/Data.js'

export default function Menu() {
  return (
    <Container maxWidth="sm">
      <Box>
        <Header {...aboutObj}/>
        <CustomTabs {...tabsObj}/>
        <NavigationBar />
      </Box>
    </Container>
  );
}