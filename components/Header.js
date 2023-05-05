import * as React from 'react';
import Typography from '@mui/material/Typography';
import BasicStack from '../components/BasicStack.js';

export const Header = ({ banner, name, address, infoObj }) => {
  console.log(banner.img)
  return (
    <>
      <img src={banner.img.src} alt={banner.alt} style={{ width: '100%' }}/>
      <Typography variant="h4" component="h1" gutterBottom align='center'>
        {name}
      </Typography>
      <Typography variant="body1" gutterBottom align='center' mb={2}>
        {address}
      </Typography>
      <BasicStack infoObj={infoObj}/>
    </>
  )
}