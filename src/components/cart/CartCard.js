import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { FoodActions } from '../../redux/slices/FoodSlice';

const CartCard = ({
  id,
  name,
  img,
  quantity,
  price,
  des,
  subtotal,
  total,
  couponApplied,
}) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);

  const addItemToCart = () => {
    if (quantity === 5) {
      setError(true);
    } else {
      dispatch(
        FoodActions.addToCart({
          id,
          name,
          img,
          quantity,
          price,
          des,
          subtotal,
          total,
        })
      );
    }
  };

  const removeFromCartItem = () => {
    dispatch(FoodActions.removeFromCart(id));
    setError(false);
  };

  return (
    <>
      {!error ? (
        ''
      ) : (
        <Typography sx={{ color: 'red', pl: { md: 7, sm: 7 } }}>
          cannot add more than 5 food items
        </Typography>
      )}
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          py: 2,
          justifyContent: {md:'space-around' },
          marginX:'auto',
          flexDirection:{md:'row',xs:'column'}
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', sm: 'row-reverse' },
          }}
        >
          <Box sx={{ pl: 4 }}>
            <Typography sx={{ fontWeight: 'bold' }}>{name}</Typography>
            <Box
              sx={{
                mt: 1,
                flexWrap: 'nowrap',
                display: couponApplied ? 'none' : 'flex',
              }}
            >
              <button
                disabled={couponApplied}
                className="px-2 bg-[#FFA500] text-white rounded mr-2"
                onClick={removeFromCartItem}
              >
                -
              </button>
              {quantity}
              <button
                disabled={couponApplied}
                className="px-2 bg-[#FFA500] text-white rounded mx-2"
                onClick={addItemToCart}
              >
                +
              </button>
            </Box>
          </Box>
          <img
            src={img}
            alt={name}
            style={{
              width: '180px',
              height: '120px',
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box>
          <Typography>Price : ₹{price}</Typography>
        </Box>
        <Box>
          <Typography>Total : ₹{subtotal}</Typography>
        </Box>
      </Box>
      <hr />
    </>
  );
};

export default CartCard;
