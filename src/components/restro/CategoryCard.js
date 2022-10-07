import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FoodActions } from '../../redux/slices/FoodSlice';

const CategoryCard = ({ id, name, des, price, img }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.food.cartList);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);

  const addToCart = ({ id, name, time, img, des, price }) => {
    const find = cartList.find((item) => item.id === id);

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
      }, 500);
    }
    // dispatch(FoodActions.addToCart({ id, name, img, des, price }));
  };
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          p: '10px',
          flexDirection: { sm: 'row', xs: 'column' },
        }}
        key={id}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: { sm: '211px' },
            height: '186px',
          }}
        >
          <img
            src={img}
            alt={name}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '186px',
              borderRadius: '20px',
            }}
          />
        </Box>
        <Box sx={{ pl: '20px', pt: '20px', justifyContent: 'center' }}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="p" sx={{ color: '#848484' }}>
            {des}
          </Typography>
          <br />
          <Typography variant="p">₹{price}</Typography>
          <Box sx={{ pt: '25px' }}>
            <>
              <Button
                onClick={() =>
                  addToCart({
                    id: id,
                    name: name,
                    time: 15,
                    img: img,
                    price: price,
                    des: des,
                  })
                }
                sx={{
                  backgroundColor: '#FFA500',
                  color: 'white',
                  ml: '10px',
                  '&:hover': {
                    backgroundColor: '#F6B716',
                    color: '#fff',
                  },
                }}
              >
                Add to Cart
              </Button>
            </>
            {message ? (
              <Typography sx={{ color: 'green' }}>Added to cart</Typography>
            ) : (
              ''
            )}
            {error ? (
              <Typography sx={{ color: 'red' }}>
                Can't add more than 5 quantity
              </Typography>
            ) : (
              ''
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CategoryCard;
