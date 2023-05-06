import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';

export const NavigationBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Início" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="Pedidos" icon={<ReorderOutlinedIcon />} />
        <BottomNavigationAction label="Cupom" icon={<ConfirmationNumberOutlinedIcon />} />
      </BottomNavigation>
    </Box>
  );
}