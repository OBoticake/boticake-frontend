import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import theme from '../src/theme';
import { Icon } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
}));

export default function DirectionStack({ infoObj }) {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent={'center'}>
        {infoObj.map((item) => (
          <Item key={item.title} theme={theme}>
            {item.title}
            <Icon component={item.icon} sx={{ fontSize: 32 }}/>
          </Item>
        ))}
      </Stack>
    </div>
  );
}