import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FoodActions } from '../../redux/slices/FoodSlice';
import { useDispatch } from 'react-redux';


const FoodWeatherCard = ({ id, name, time, img ,des,price}) => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
 
    dispatch(FoodActions.addToCart({ id, name, time, img ,des,price}));
  };
  return (
    <>
      <Box
        onClick={() => handleOnClick(id)}
        sx={{
          width: {
            xs: '200px',
            sm: '200px',
            md: '250px',
            lg: '300px',
          },
          cursor:'pointer'
        }}
      >
        <img
          src={img}
          alt={name}
          style={{ objectFit: 'cover', width: '100%',height:'200px',borderRadius:'20px 20px 0px 0px' }}
        />
        <Typography variant="h6" sx={{ pt: '8px' }}>
          {name}
        </Typography>
        <Typography variant="p" sx={{ color: '#999999', pb: '8px' }}>
          {time} Min
        </Typography>
      </Box>
    </>
  );
};

export default FoodWeatherCard;
