import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Settings from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Logout from "@mui/icons-material/Logout";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EventIcon from "@mui/icons-material/Event";


interface TastyTalesMenuInterface {
  key: string,
  label: string,
  icon?: React.ReactNode,
  href: string
}
export const tastyTalesMenu: TastyTalesMenuInterface[] = [
  {
    key: "whatToCook",
    label: "What To Cook",
    icon: <SoupKitchenIcon />,
    href: "/what-to-cook"
  },
  {
    key: "recipes",
    label: "Recipes",
    icon: <RestaurantMenuIcon />,
    href: "/recipes"
  },
  {
    key: "ingredients",
    label: "Ingredients",
    icon: <ShoppingBasketIcon />,
    href: "/ingredients"
  },
  {
    key: "occasions",
    label: "Occasions",
    icon: <EventIcon />,
    href: "/occasions"
  },
  {
    key: "myRecipes",
    label: "My Recipes",
    icon: <MenuBookIcon/>,
    href: '/my-recipes'
  },
  {
    key: "accountSettings",
    label: "Account Settings",
    icon: <Settings/>,
    href: '/account-settings'
  },
  {
    key: "notifications",
    label: "Notifications",
    icon: <NotificationsIcon/>,
    href: 'notifications'
  },
  {
    key: "helpCenter",
    label: "Help Center",
    icon: <HelpOutlineIcon/>,
    href: '/help-center'
  },
  {
    key: "logout",
    label: "Logout",
    icon: <Logout/>,
    href: ''
  }

]