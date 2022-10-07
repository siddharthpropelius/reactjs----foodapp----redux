import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { FoodActions } from '../../redux/slices/FoodSlice';
import { useDispatch, useSelector } from 'react-redux';

const FoodWeatherCard = ({ id, name, time, img, des, price }) => {
  const cartList = useSelector((state) => state.food.cartList);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const handleOnClick = (itemid) => {
    const find = cartList.find((item) => item.id === itemid);
    if (find?.quantity === 5) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 500);
    } else {
      dispatch(FoodActions.addToCart({ id, name, time, img, des, price }));
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 2000);
    }

    // dispatch(FoodActions.addToCart({ id, name, time, img, des, price }));
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
          cursor: 'pointer',
        }}
      >
        <img
          src={img}
          alt={name}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '200px',
            borderRadius: '20px 20px 0px 0px',
          }}
        />
        <Typography variant="h6" sx={{ pt: '8px' }}>
          {name}
        </Typography>
        <Typography variant="p" sx={{ color: '#999999', pb: '8px' }}>
          {time} Min
        </Typography>
        {message ? (
          <Typography sx={{ color: 'green' }}>Item added to cart</Typography>
        ) : (
          ''
        )}
        {error ? (
          <Typography sx={{ color: 'red' }}>
            Can't add mor than 5 items
          </Typography>
        ) : (
          ''
        )}
      </Box>
    </>
  );
};

export default FoodWeatherCard;
