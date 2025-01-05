import Image from 'next/image'
import {Avatar} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import SaveIcon from "@mui/icons-material/Save";
import SearchInput from "@/components/shared/ui/search-input";
import Badge from "@mui/material/Badge";

const TopNavbar = () => {
  return(
    <>
      <div className={"flex flex-col w-full gap-4 px-0 md:px-16"}>
        <div className={"flex w-full items-center justify-between space-x-8"}>
          {/*logo*/}
          <div>
            <Image
              src={''}
              alt={'logo'}
            />
          </div>
          {/*search bar*/}
          <div className={"flex w-full"}>
            <SearchInput
              placeholder={'Search for recipe here...'}
              onChange={() => ''}
            />
          </div>
          {/*profile section*/}
          <div className={"flex"}>
            {/*menu button - only visible on mobile */}
            <div className={"items-center block md:hidden"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}
              >
                <MenuIcon/>
              </IconButton>
            </div>
            <div className={"items-center hidden md:flex gap-2"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
              >
               <Badge
                 color="error"
                 badgeContent={4}
                 showZero={false}
                 max={99}
                 sx={{ '& .MuiBadge-badge': { fontSize: '0.6rem', height: '18px', minWidth: '18px'} }}
               >
                 <SaveIcon/>
               </Badge>
              </IconButton>
              <div className={"border border-gray-500 rounded-full p-1"}>
                <Avatar>
                  EM
                </Avatar>
              </div>
            </div>
          </div>
        </div>

        {/*service section*/}
        <div className={"hidden md:flex flex-row items-center gap-6 font-semibold capitalize"}>
          <p>what to cook</p>
          <p>Recipe</p>
          <p>Ingredient</p>
          <p>Occasions</p>
        </div>
      </div>
    </>
  )
}
export default TopNavbar;