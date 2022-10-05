import { Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';
import c6 from '../../assets/c6.png';
import cline from '../../assets/cline.png';

const HeaderCard = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            overflowX: 'scroll',
            overflowY:'hidden',
            marginTop:'40px',
            gap:'40px'
          }}
        >
          <Box sx={{ width: '620px',height:'220px', maxWidth: 'unset',backgroundColor:'#F5F5F5' }}>
            <Box >
            <img src={c1} alt='food' style={{maxWidth:'unset'}} className='lg:w-full'/>
            </Box>
            <Typography variant='h5' sx={{px:2 , pt:2}}>Dinning Out</Typography>
            <Typography variant='p' sx={{px:2,pb:2}}>Explore curated lists of top restaurants.</Typography>
          </Box>
          <Box sx={{ width: '600px',height:'220px', maxWidth: '600px' ,backgroundColor:'#F5F5F5' }}>
            <img src={c2} alt='food' style={{maxWidth:'unset'}} className='lg:w-full' />
            <Typography variant='h5' sx={{px:2 , pt:2}}>Dinning Out</Typography>
            <Typography variant='p' sx={{px:2}}>Explore curated lists of top restaurants.</Typography>
          </Box>
          <Box sx={{ width: '600px',height:'220px', maxWidth: '600px',backgroundColor:'#F5F5F5'  }}>
            <img src={c3} alt='food' style={{maxWidth:'unset'}} className='lg:w-full' />
            <Typography variant='h5' sx={{px:2 , pt:2}}>Dinning Out</Typography>
            <Typography variant='p' sx={{px:2,pb:2}}>Explore curated lists of top restaurants.</Typography>
          </Box>
        </Box>

        <Box sx={{ my: '18px' }}>
          <Typography
            sx={{
              pt: '60px',
              color: '#FFC200',
              fontSize: { md: '48px', sm: '38px', xs: '32px' },
            }}
          >
            Our best delivered cuisines
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection:{md:'row',xs:'column'},
              justifyContent: 'space-around',
              gap: '10px',
              mt: '60px',
              alignItem: 'center',
              alignContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                m: 'auto',
                width:{md:'100%',xs:'170px'}
              }}
            >
              <img src={c4} alt="food" />
              <Typography
                variant="p"
                sx={{
                  marginX: 'auto',
                  justifyContent: 'center',
                  mt: '10px',
                  display: { md: 'block', xs: 'none' },
                }}
              >
                Chicken Noodles
              </Typography>
            </Box>
            <Box sx={{width:{md:'400px',xs:'50px'},mx:'auto', transform:{xs:'rotateZ(90Deg)',md:'rotateZ(180Deg)'} ,marginTop:'20px',marginBottom:'20px',my:{md:'auto'}  }}>
              <img src={cline} alt="line" />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', m: 'auto' ,width:{md:'100%',xs:'170px'}}}>
              <img src={c5} alt="food"  />
              <Typography
                variant="p"
                sx={{
                  marginX: 'auto',
                  justifyContent: 'center',
                  mt: '10px',
                  display: { md: 'block', xs: 'none' },
                }}
              >
                French Fries
              </Typography>
            </Box>
            <Box sx={{width:{md:'400px',xs:'50px'},mx:'auto', transform:{xs:'rotateZ(90Deg)',md:'rotateZ(180Deg)'} ,marginTop:'20px',marginBottom:'20px',my:{md:'auto',sm:'auto'} }}>
              <img src={cline} alt="line" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', m: 'auto',width:{md:'100%',xs:'170px'} }}>
              <img src={c6} alt="food" />
              <Typography
                variant="p"
                sx={{
                  marginX: 'auto',
                  justifyContent: 'center',
                  mt: '10px',
                  display: { md: 'block', xs: 'none' },
                }}
              >
                Avacado Mint Noodles
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HeaderCard;
