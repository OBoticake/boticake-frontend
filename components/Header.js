import * as React from 'react';
import Typography from '@mui/material/Typography';
import { BasicStack } from '../components/BasicStack.js';
import Image from 'next/image';
import PropTypes from 'prop-types';

export const Header = ({ banner, name, address, infoObj }) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Image
          src={banner.img.src}
          alt={banner.alt}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100vw', height: 'auto', margin: '0 -16px' }}
        />
      </div>
      <Typography variant="h4" component="h1" align="center" my={2}>
        {name}
      </Typography>
      <Typography variant="body2" align="center" mb={2}>
        {address}
      </Typography>
      <BasicStack infoObj={infoObj} mb={4} />
    </>
  );
};

Header.propTypes = {
  banner: PropTypes.shape({
    img: PropTypes.object.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  infoObj: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
    })
  ).isRequired,
};