import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import React from 'react';
import one from '../../assets/poster5.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import insta from '../../assets/insta.png'

const PosterItem3 = () => {
  return (
    <div className='mt-16 relative md:px-5 w-full flex justify-center'>

      <img src={one} alt='poster' style={{margin:'auto'}} />
      <div className='absolute inset-0 bg-[#F6B716] w-fit h-fit p-5 rounded m-auto text-white text-[12px] md:text-[22px]'>
        <p className='text-center'>Follow Us on Instagram to see Pictures Taken <br/>By our Customer</p>
        <div className='flex justify-center gap-4'>
        <img src={insta} alt='logo'/>
        <p className='text-center sm:text-[12px]'>@code.siddharth</p>
      </div>
      </div>
    </div>
  );
};

export default PosterItem3;
