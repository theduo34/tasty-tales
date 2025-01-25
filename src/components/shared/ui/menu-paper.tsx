'use client';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from "react";
import Link from 'next/link';
import {tastyTalesMenu} from '@/lib/tasty-tales-menu';

const ProfileMenuPaper = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Profile">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'profile' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}/>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="profile"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        disableScrollLock={true}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {
          tastyTalesMenu.slice(4,9).map((menu) => (
            <Link  key={ menu.key }  href={menu.href}>
              <MenuItem onClick={ handleClose }>
                <ListItemIcon>
                  { menu.icon }
                </ListItemIcon>
                { menu.label }
              </MenuItem>
              {(menu.key === 'helpCenter' || menu.key === 'layout') && (
                <Divider />
              )}
            </Link>
          ))
        }
      </Menu>
    </>
  );
}
export default ProfileMenuPaper;
