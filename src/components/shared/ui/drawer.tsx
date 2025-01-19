'use client';

import {Box} from "@mui/material"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "@mui/material/Drawer"
import React from "react";
import {tastyTalesMenu} from "@/utils/tasty-tales-menu";
import Link from "next/link";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import {usePathname} from "next/navigation";

export const DrawerMenu = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const pathname = usePathname();

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  }
  return(
    <div>
      <IconButton
        onClick = {() => toggleDrawer(!open)}
      >
        <MenuIcon/>
      </IconButton>
      <Drawer
        open={open}
        anchor="right"
        onClose = { () => toggleDrawer(false)}
        sx={{
          zIndex: 1300,
          display: { md: "none"},
          height: "100vh",
          top: 0,
          right: 0,
          position: "absolute"
      }}
      >
        <Box
          sx={{
            width: 270,
            padding: 2,
            backgroundColor: "",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          className={""}
        >
          { tastyTalesMenu.slice(0,8).map((menu) => {
            const active = pathname === menu.href;
            return(
              <Link
                key={ menu.key }
                href={menu.href}
                className={`items-center justify-center ${active && ('bg-neutral-200 rounded-md ')}`}
              >
                <MenuItem>
                  <ListItemIcon>
                    { menu.icon }
                  </ListItemIcon>
                  { menu.label }
                </MenuItem>
              </Link>
            )})
          }
        </Box>
        <Box className={'flex items-center justify-center px-4 pb-2'}>
          { tastyTalesMenu.slice(-1).map((menu) => {
            return (
              <Link
                href={menu.href}
                key={ menu.key }
                className={"py-2 flex  w-full items-center justify-center border border-neutral-300 bg-tasty-primary-400 text-white hover:shadow-lg rounded-md"}
              >
                {menu.icon} <span className={"ml-2"}>{menu.label}</span>
              </Link>
            )})
          }
        </Box>
      </Drawer>
    </div>
  )
}