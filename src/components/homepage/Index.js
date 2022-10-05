import React from 'react';
import NavBar from '../Layout/NavBar';
import HeaderCard from './HeaderCard';
import Hero from './Hero';
import PopularRecipes from './PopularRecipes';
import PosterContainer from './PosterContainer';
import Auth from '../Auth/Auth'

const Index = () => {
  return (
    <div>
      <Auth/>
      <Hero />
      <HeaderCard />
      <PopularRecipes />
      <PosterContainer />
    </div>
  );
};

export default Index;
