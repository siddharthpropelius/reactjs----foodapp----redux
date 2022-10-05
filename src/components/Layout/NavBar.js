import { Badge, Container, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from '@emotion/styled';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const totalCount = useSelector((state) => state.food.totalItem);
  const [navbg, setNavBg] = useState(false);
  const [show,setShow]=useState(false);
  
  useEffect(() => {
    if (location.pathname === '/') {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  },[]);
  const StyledBadge = styled(Badge)(({ theme }) => ({}));

  const handleOnLogOut = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const handleNavbar=()=>{
    setShow(!show)
  }
  return (
    <>
    <nav
      className="pt-3 flex justify-between  py-2 px-8  z-10 relative text-black ,"
      style={{
        background: navbg ? 'rgba(0, 0, 0, 0.47)' : '#FFFFFF',
        color: navbg ? 'white' : 'black',
      }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3 style={{ color: '#FFC300', fontSize: '20px' }}>
          <NavLink to="/">NoodleTown</NavLink>
        </h3>
        <Box>
          <Box sx={{display:{xs:'none',md:'flex'},gap:4}}>
          
          <p style={{ fontSize: '20px' }}>
            <NavLink to="/menu">Menu</NavLink>
          </p>
          <p style={{ fontSize: '20px' }} onClick={handleOnLogOut}>
            <NavLink to="/menu">Logout</NavLink>
          </p>
          <p className="-mt-[4px]">
            <NavLink to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={totalCount} color="primary">
                  <ShoppingCartIcon sx={{ color: navbg ? 'white' : 'black' }} />
                </StyledBadge>
              </IconButton>
            </NavLink>
          </p>
          </Box>
          <Box sx={{display:{xs:'block',md:'none'},cursor:'pointer'}}>
          <MenuIcon sx={{ gap:4,display:'flex'}} onClick={handleNavbar}/>
          </Box>
      
        </Box>
        
      </Container>
   
    </nav>
     {show?
<div className='w-full h-full bg-red z-10 relative flex justify-end gap-12' style={{ background: navbg ? 'rgba(0, 0, 0, 0.47)' : '#FFFFFF',
        color: navbg ? 'white' : 'black',}}>
<p style={{ fontSize: '20px' }}>
            <NavLink to="/menu">Menu</NavLink>
          </p>
          <p style={{ fontSize: '20px' }} onClick={handleOnLogOut}>
            <NavLink to="/menu">Logout</NavLink>
          </p>
          <p className="-mt-[4px]">
            <NavLink to="/cart">
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={totalCount} color="primary">
                  <ShoppingCartIcon sx={{ color: navbg ? 'white' : 'black' }} />
                </StyledBadge>
              </IconButton>
            </NavLink>
          </p>
</div>
     :''}
     </>
  );
};

export default NavBar;
