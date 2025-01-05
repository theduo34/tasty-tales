'use client';

import {Box} from "@mui/material"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Drawer from "@mui/material/Drawer"
import React from "react";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const DrawerMenu = () => {
  const [open, setOpen] = React.useState<boolean>(false);

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
          <List>
            <ListItem key={'what to cook'}>
              <ListItemButton>
                <ListItemText>
                  What to cook
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem key={'recipes'}>
              <ListItemButton>
                <ListItemText>
                  Recipes
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem key={'ingredients'}>
              <ListItemButton>
                <ListItemText>
                  Ingredients
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem key={'occasions'}>
              <ListItemButton>
                <ListItemText>
                  Occasions
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  )
}