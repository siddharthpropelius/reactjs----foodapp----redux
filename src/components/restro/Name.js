import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { restroData } from '../../data/data';

const Name = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const filteredData = restroData.find((item) => item.id === id);
    setData(filteredData);
  }, [data]);
  return (
    <Container sx={{ mt: '30px' }}>
   
          <>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column' },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <img src={data.img} alt="food" />
              </Box>
              <Box sx={{ ml: '30px', mt: '20px' }}>
                <Typography variant="h5">{data.name}</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: { md: '100px', xs: '40px' },
                    flexWrap: 'wrap',
                  }}
                >
                  <Box sx={{ paddingY: '10px' }}>
                    <Typography sx={{ color: '#999999' }}>
                      {data.des}
                    </Typography>
                    <Typography sx={{ color: '#999999' }}>
                      {data.location}
                    </Typography>
                    <Typography>
                      <span style={{ color: '#C84B11' }}>Open Now </span>11pm -
                      11pm (Today)
                    </Typography>
                  </Box>
                  <Box>
                    <span style={{ color: '#999999' }}>Average Cost </span>700rs
                    for 2 person
                  </Box>
                </Box>
              </Box>
            </Box>
          </>

    </Container>
  );
};

export default Name;
