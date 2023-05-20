import * as React from 'react';
import { Container, Box } from '@mui/material';
import { Hero } from '../../components/Hero.js';
import { CustomTabs } from '../../components/CustomTabs.js';
import { NavigationBar } from '../../components/NavigationBar.js';

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
