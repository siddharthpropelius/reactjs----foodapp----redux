import React from 'react';
import { useParams } from 'react-router-dom';
import Category from './Category';
import Header from './Header';
import Menu from './Menu';
import Name from './Name';
import NavBar from '../Layout/NavBar';
import Auth from '../Auth/Auth';

const Index = () => {
  const restroName = useParams();
  return (
    <>
      <Auth />
      <NavBar />
      <Header />
      <Name id={restroName.id} />
      <Menu />
      <Category />
    </>
  );
};

export default Index;
