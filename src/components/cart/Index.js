import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavBar from '../Layout/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system';
import CartCard from './CartCard';
import { NavLink } from 'react-router-dom';
import { FoodActions } from '../../redux/slices/FoodSlice';
import Auth from '../Auth/Auth';

const Index = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.food.cartList);
  const totalAmount = useSelector((state) => state.food.totalAmount);
  const totalDiscount = useSelector((state) => state.food.totalDiscount);
  const completeSubTotal = useSelector((state) => state.food.completeSubTotal);
  const couponList = useSelector((state) => state.food.couponList);
  const haveCoupon = useSelector((state) => state.food.couponData);
  const couponApplied = useSelector((state) => state.food.couponApplied);
  const [valid, setvalid] = useState(true);
  const [coupon, setCoupon] = useState('');

  const couponHandler = () => {
    const validCoupon = couponList.find(
      (item) => item.name === coupon.toLowerCase()
    );
    if (validCoupon) {
      setvalid(true);
      dispatch(FoodActions.addCoupon(coupon));
    } else {
      setvalid(false);
      // setCouponApplied(false);
    }
  };

  const removeCoupon = () => {
    dispatch(FoodActions.removeCoupon(coupon));
  };

  return (
    <>
      <Auth>
        <NavBar />
        <Container>
          <Typography variant="h5" sx={{ mt: '50px' }}>
            Your Cart
          </Typography>
        </Container>
        {cartList.length === 0 ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '100px' }}>
            <Typography
              sx={{
                fontSize: {
                  md: '28px',
                  sm: '22px',
                  xs: '20px',
                },
                color: '#FFC200',
              }}
            >
              Nothing in Cart. Add Something
            </Typography>
          </Box>
        ) : (
          <>
            <Container>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: { md: 'row', xs: 'column' },
                  marginTop: 5,
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
                  {cartList?.map((item) => {
                    return (
                      <>
                        <CartCard
                          id={item.id}
                          name={item.name}
                          price={item.price}
                          quantity={item.quantity}
                          img={item.img}
                          des={item.des}
                          subtotal={item.subTotal}
                          total={item.totalPrice}
                          couponApplied={couponApplied}
                        />
                      </>
                    );
                  })}
                </Box>

                <Box sx={{ mt: '20px' }}>
                  <div className="w-full flex justify-center pl-5">
                    <div className="border px-12 py-6 rounded">
                      <h1 className="text-2xl text-[#FFC200] pb-4">
                        {' '}
                        ORDER SUMMARY
                      </h1>
                      <hr />
                      <div className="flex justify-between mt-4">
                        <p className="font-bold text-xl">Sub Total :</p>
                        <p className="font-bold text-xl">₹{completeSubTotal}</p>
                      </div>
                      <div className="flex justify-between mt-4">
                        <p className="font-bold text-xl">Delivery Charge :</p>
                        <p className="font-bold text-xl">₹15</p>
                      </div>
                      {totalDiscount ? (
                        <div className="flex justify-between mt-4 text-red-900">
                          <p className="font-bold text-xl">Total Discount :</p>
                          <p className="font-bold text-xl text-red-900">
                            ₹{totalDiscount}
                          </p>
                        </div>
                      ) : (
                        ''
                      )}
                      <br />
                      <hr />
                      <div className="flex justify-between pb-4">
                        <p className="font-bold text-xl">Total :</p>
                        <p className="font-bold text-xl">₹{totalAmount + 15}</p>
                      </div>
                      <hr />
                      <Box sx={{ mt: 2 }}>
                        {couponApplied ? (
                          <>
                            <Typography sx={{ color: 'green' }}>
                              COUPON APPLIED: {haveCoupon.toUpperCase()}{' '}
                              <span
                                className="text-red-900 cursor-pointer"
                                onClick={removeCoupon}
                              >
                                REMOVE
                              </span>
                            </Typography>
                          </>
                        ) : (
                          <>
                            <TextField
                              onChange={(e) => setCoupon(e.target.value)}
                              id="outlined-basic"
                              label="have a coupon apply here"
                              variant="outlined"
                              required
                              value={coupon.toUpperCase()}
                            />
                            <Button
                              variant="contained"
                              sx={{
                                marginX: '6px',
                                marginTop: '10px',
                                color: '#FFFFFF',
                                backgroundColor: '#F6B716',
                                '&:hover': {
                                  backgroundColor: '#F6B711',
                                },
                              }}
                              onClick={() => couponHandler()}
                            >
                              Apply
                            </Button>
                          </>
                        )}
                      </Box>
                      <Typography sx={{ color: 'red', mt: 1 }}>
                        {!valid ? 'Invalid Coupon' : ''}
                      </Typography>
                    </div>
                  </div>
                </Box>
              </Box>
            </Container>
            <NavLink to="/order">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  pt: '30px',
                  pb: '50px',
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: '#F6B716',
                    color: '#FFFFFF',
                    width: '40%',
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    paddingY: '10px',
                    marginBottom: '10px',
                  }}
                >
                  Order Now
                </Typography>
              </Box>
            </NavLink>
          </>
        )}
        {/* </Container> */}
      </Auth>
    </>
  );
};

export default Index;
