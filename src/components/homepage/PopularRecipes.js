import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FoodActions } from '../../redux/slices/FoodSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import { btnData } from '../../data/data';
import v1 from '../../assets/v2.png';
import v2 from '../../assets/v1.png';


const PopularRecipes = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.food.foodList);
  const cartList = useSelector((state) => state.food.cartList);
  const [value, setValue] = useState('pizza');
  const [foodData, setFoodData] = useState([]);
  const [isBtnSelected, setIsBtnSelected] = useState(false);
  useEffect(() => {
    const filteredData = data.filter((item) => item.category === value);
    setFoodData(filteredData);
  }, []);

  const handleOnClick = async (name) => {
    setIsBtnSelected(!isBtnSelected);
    setValue(name);
    const filteredData = await data.filter((item) => item.category === name);
    setFoodData(filteredData);
  };

  const addToCart = ({ id, name, time, img, des, price }) => {
    cartList.find((item) => {
      if (item.id === id) {
        if (item.quantity === 5) {
          alert('cant add more');
        }
      }
    });
    dispatch(FoodActions.addToCart({ id, name, img, time, des, price }));
  };
  return (
    <Box sx={{position:'relative'}}>
      <Box sx={{display:{md:'block',xs:'none'}}}>
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <img src={v1} alt='vector' style={{left:0,position:'absolute'}}/>
      <img src={v2} alt='vector' style={{right:0,position:'absolute'}}/>
    </Box>


    </Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          display: 'flex',
          justifyContent: 'center',
          mt: '150px',
        }}
      >
        Popular Recipes
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: {md:'center',xs:'space-between'},
          gap: '5px',
          marginTop: '30px',
          px: '8px',
          overflowX:'scroll'
        }}
      >
        {btnData.map((item) => {
          return (
            <>
              <Button
                key={item.id}
                sx={{
                  maxWidth:'unset',
                  width:'200px',
                  backgroundColor: item.name === value ? '#F6B716' : '#FFF',
                  color: item.name === value ? '#FFF' : '#000',
                  borderRadius: '45px',
                  px: '40px',
                  '&:hover': {
                    backgroundColor: '#F6B716',
                    color: '#fff',
                  },
                }}
                onClick={() => handleOnClick(item.name)}
              >
                {item.name}
              </Button>
            </>
          );
        })}
      </Box>
      <Box sx={{ mt: '50px', px: {xs:'6px',md:'30px'} }}>
        <Swiper
          loop={true}
          spaceBetween={30}
          slidesPerView={4}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            300: {
              width: 300,
              slidesPerView: 1,
            },
          }}
        >
          {foodData.map((item) => {
            return (
              <>
                <SwiperSlide>
                  <Box
                    className="ds"
                    sx={{
                      width: '310px',
                      height: '500px',
                      backgroundColor: '#FFF',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: '25px',
                      cursor:'pointer'
                    }}
                    key={item.id}
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                        time: item.time,
                        img: item.img,
                        price: item.price,
                        des: item.des,
                      })
                    }
                  >
                    <img
                      src={item.img}
                      alt="food"
                      style={{
                        width: '100%',
                        height: '70%',
                        objectFit: 'cover',
                        borderRadius: '25px 25px 0px 0px',
                      }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        px: '20px',
                        pt: '20px',
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography sx={{ px: '20px' }}>{item.des}</Typography>
                    <Typography sx={{ px: '20px', pb: '20px' }}>
                      ₹{item.price}
                    </Typography>
                  </Box>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default PopularRecipes;
