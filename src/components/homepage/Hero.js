import React from 'react';
import styled from '@emotion/styled';
import { TextField, Typography } from '@mui/material';
import img from '../../assets/hero.jpg';
import NavBar from '../Layout/NavBar';
import { Box } from '@mui/system';

const Hero = () => {
  const StyledDiv = styled('div')({
    position: 'relative',
    margin: 'auto',
    background: 'rgba(0, 0, 0, 0.46)',
    height: '349px',
  });

  return (
    <div>
      
      <img
        src={img}
        alt="hero-img"
        style={{
          width: '100%',
          height: '408px',
          objectFit: 'cover',
          position: 'absolute',
        }}
      />
<NavBar />
      <StyledDiv>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',margin:'auto',color:'white',paddingTop:{lg:'4%',md:'10%',sm:'10%',xs:'25%'}}}>
          <Typography
            variant="h2"
            fontWeight={900}
            sx={{
                display:{md:'block',sm:'block',xs:'none'}
            }}
          >
            NOODLETOWN
          </Typography>
          <Typography variant="h5" sx={{ display:{md:'block',sm:'block',xs:'none'},pt:2,pb:6}}>discover best food around you</Typography>
          <Box sx={{backgroundColor:'#D9D9D9',width:{xs:'250px',sm:'400px',},borderRadius:'5px'}}>
          <TextField id="filled-basic" label="Search for restuarant, cuisine, place" variant="filled" fullWidth/>
          </Box>
        </Box>
      </StyledDiv>
    </div>
  );
};

export default Hero;
