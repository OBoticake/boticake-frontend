import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import PropTypes from 'prop-types';
import * as React from 'react';

export const CustomCard = ({ content }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {content.map((item, index) => (
        <Card key={index}>
          <CardActionArea sx={{ display: 'flex' }}>
            <CardContent sx={{ width: '80%' }}>
              <Typography gutterBottom variant="h6" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="body1">{item.price}</Typography>
            </CardContent>

            <Box sx={{ display: 'flex', width: '20%', mr: 2 }}>
              <Image
                src={item.image}
                alt={'oi'}
                width={0}
                height={0}
                sizes="100%"
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  aspectRatio: '1 / 1',
                  borderRadius: '4px',
                }}
              />
            </Box>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

CustomCard.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};