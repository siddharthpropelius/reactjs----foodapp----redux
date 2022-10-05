import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';

export const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        startAdornment: iconStart ? (
          <InputAdornment position="start">{iconStart}</InputAdornment>
        ) : null,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};

export default function Login() {
  const navigate = useNavigate();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authEmail = 'siddharth.vaishnav@propelius.tech';
  const authPassword = '123456';
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/')
    }
    
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (authEmail === email && authPassword === password) {
      setError(false);
      localStorage.setItem('isLoggedIn', true);
      navigate('/');
    } else {
      setError(true);
    }
  };

  const handleShowMe = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 'bold',
          color: '#FFC200',
          mt: '100px',
        }}
      >
        NOODlETOWN
      </Typography>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#FFC200' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} validate sx={{ mt: 1 }}>
          <IconTextField
            required
            sx={{ mt: 1 }}
            fullWidth
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            iconEnd={
              <IconButton edge="end">
                <MailIcon />
              </IconButton>
            }
          />
          <IconTextField
            required
            sx={{ mt: 2 }}
            fullWidth
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? 'text' : 'password'}
            iconEnd={
              <IconButton
                onClick={handleShowMe}
                aria-label="toggle password visibility"
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: '#FFC200',
              color: 'white',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#F6B716',
                color: '#fff',
              },
            }}
          >
            Sign In
          </Button>
          {error ? (
            <Typography sx={{ color: 'red' }}>
              Email or Password is Incorrect!
            </Typography>
          ) : (
            ''
          )}
        </Box>
      </Box>
    </Container>
  );
}
