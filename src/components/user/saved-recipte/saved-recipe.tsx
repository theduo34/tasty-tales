'use client';

import {Tooltip} from '@mui/material'
import Badge from "@mui/material/Badge";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";

const SavedRecipe = () => {
  return(
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
        <Tooltip title={"Your recipe box"}>
          <SaveIcon/>
        </Tooltip>
      </Badge>
    </IconButton>
  )
}
export default SavedRecipe;