import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { restroData } from '../../data/data';

const Restro = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/restro/${id}`);
  };
  return (
    <>
      <Container maxWidth='lg'>
        <Typography variant="h6" sx={{ mt: '40px' }}>
          Top brands for you
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            overflowX: 'scroll',
            gap: '20px',
            mt: '30px',
            px:2
          }}
        >
          {restroData.map((item) => {
            return (
              <>
                  <img src={item.img} alt={item.name} style={{width:'120px',cursor:'pointer'}}  onClick={()=>handleClick(item.id)}/>
              </>
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default Restro;
