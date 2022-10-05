import React from 'react';
import Navbar from '../Layout/NavBar'
import FoodWeather from './FoodWeather';
import Restro from './Restro';
import Auth from '../Auth/Auth'

const Index = () => {

  return <div>
    <Auth/>
    <Navbar />
    <Restro/>
    <FoodWeather/>
  </div>;
};

export default Index;
