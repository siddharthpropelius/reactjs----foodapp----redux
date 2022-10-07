import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FoodActions } from '../../redux/slices/FoodSlice';
import { useParams } from 'react-router-dom';
import { restroData } from '../../data/data';
import CategoryCard from './CategoryCard';

const Category = () => {
  const RID = useParams();
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState('Recommended');
  const categoryItem = useSelector((state) => state.food.foodList);
  const cartList = useSelector((state) => state.food.cartList);
  const [foodItems, setFoodItems] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    Recommended();
  }, []);

  const Recommended = () => {
    const categoryId = restroData.filter((item) => item.id === RID.id);
    categoryId.map((item) => {
      setData(item.category);
    });

    const newData = [...categoryItem];
    const sort = newData.sort(() => Math.random() - Math.random());
    const filteredData = sort.splice(0, 5);

    // setFoodItems(filteredData);
    setFoodItems((_data) => {
      return [...filteredData];
    });
    setCategoryName('Recommended');
  };

  const onClickHandler = (name) => {
    if (name === 'Recommended') {
      Recommended();
    } else {
      const item = categoryItem.filter(
        (item) => item.category === name.toLowerCase()
      );
      setFoodItems(item);
      setCategoryName(name);
    }
  };

  // const addToCart = ({ id, name, time, img, des, price }) => {
  //   dispatch(FoodActions.addToCart({ id, name, time, img, des, price }));
  //   cartList.find((item) => {
  //     if (item.id === id) {
  //       if (item.quantity === 5) {
  //         // setError(true);
  //       }
  //     }
  //   });
  // };
  return (
    <Container sx={{ my: '50px' }}>
      <Typography variant="h4">Order Online</Typography>
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
          mt: '30px',
          flexDirection: { md: 'row', xs: 'column' },
          flex: 3,
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', md: 'block' },
            overflowX: 'scroll',
            flex: 1 / 2,
            textAlign: { md: 'left', xs: 'center' },
          }}
        >
          {data?.map((item) => {
            return (
              <>
                <Typography
                  onClick={() => onClickHandler(item.name)}
                  sx={{
                    cursor: 'pointer',
                    color: item.name === categoryName ? '#FFFFFF' : '#000000',
                    backgroundColor:
                      item.name === categoryName ? '#FFC300' : '',
                    p: '10px',
                    flex: 4,
                  }}
                >
                  {item.name}
                </Typography>
              </>
            );
          })}
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {foodItems?.map((item) => {
            return (
              <>
                <CategoryCard
                  id={item.id}
                  name={item.name}
                  des={item.des}
                  price={item.price}
                  img={item.img}
                  tIme={item.time}
                />
              </>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Category;
