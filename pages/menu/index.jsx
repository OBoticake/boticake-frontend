import { Box, Container } from '@mui/material';
import * as React from 'react';
import { CustomTabs } from '../../components/CustomTabs.jsx';
import { Hero } from '../../components/Hero.jsx';
import { NavigationBar } from '../../components/NavigationBar.jsx';

import { aboutObj, tabsObj } from '../../utils/Data.js';

export default function Menu() {
  return (
    <Container maxWidth="md">
      <Box>
        <Hero {...aboutObj} />
        <CustomTabs {...tabsObj} />
        <NavigationBar />
      </Box>
    </Container>
  );
}
