import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import gif from '../../assets/gif.gif';
import { FoodActions } from '../../redux/slices/FoodSlice';
import Auth from '../Auth/Auth';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FoodActions.resetRedux());
  }, []);

  return (
    <>
      <Auth />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      >
        <img src={gif} alt="gif" />
      </Box>
    </>
  );
};

export default Index;
