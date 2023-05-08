import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import theme from '../src/theme';
import { Icon, Typography } from '@mui/material';

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
  cursor: 'pointer',
}));

export const BasicStack = ({ infoObj }) => {
  return (
    <Stack direction="row" spacing={2} justifyContent={'center'} mb={4}>
      {infoObj.map((item) => (
        <Item key={item.title} theme={theme}>
          <Typography variant="body2">{item.title}</Typography>
          <Icon component={item.icon} sx={{ fontSize: '1.8rem' }} />
        </Item>
      ))}
    </Stack>
  );
};
