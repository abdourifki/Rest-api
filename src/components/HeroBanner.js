import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color='orange' fontWeight="600" fontSize="26px"   marginBottom="-120px" ></Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '50px', xs: '40px' } }} mb="23px" mt="30px" style={{color: 'orangered'}}>
      " Train, Eat, Sleep, <br />
      And Repeat "
    </Typography>
    <Typography fontSize="23px" fontFamily='Poppins' lineHeight="45px" fontWeight="bold">
      Check out the most effective exercises<br/> personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ fontFamily:'Poppins',marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'orangered', padding: '14px', fontSize: '19px', textTransform: 'none', color: 'white', borderRadius: '4px', }}>Explore Exercises</a>
    </Stack>,
    <Typography fontWeight={600} color="goldenrod" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '180px', color: 'black', fontFamily:'Poppins', marginTop:'120px', textAlign:'left' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;