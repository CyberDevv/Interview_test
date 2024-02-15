"use client"

import { Avatar, Badge } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


const Navbar = () => {
  return (
    <nav className="py-5 border-b-2 bg-white">
      <div className="container_fluid between">
        <p className="text-base lg:text-xl font-bold tracking-wide">Logo</p>

        <div className="start space-x-2">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar sx={{ width: {
              'md': '32',
              'lg': '48'
            }, height: {
              'md': '32',
              'lg': '48'
            } }}>A</Avatar>
          </StyledBadge>
          <div className="col-start">
            <h6 className="font-bold tracking-wide text-md md:text-base">Aitanun Daniel</h6>
            <p className="text-xs md:text-sm">daniel.aitanun@alathian.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
