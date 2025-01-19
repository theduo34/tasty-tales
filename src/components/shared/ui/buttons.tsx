'use client';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Filled heart
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Outlined heart
import IconButton from '@mui/material/IconButton';
import {Tooltip} from "@mui/material";

export const FavoriteIconStarred = ({ recipeId, savedStatus}: {
  recipeId: string;
  savedStatus: boolean;
}) => {
  const [isSaved, setIsSaved] = useState<boolean>(savedStatus);
  const toggleSave = (id: string) => {
    if(recipeId === id){
      setIsSaved((prev) => !prev);
    }
  };
  return(
    <div>
      <IconButton
        onClick={ () => toggleSave(recipeId)}
      >
        { isSaved ?
          (
            <Tooltip title="Saved">
              <FavoriteIcon  sx={{ fill: "#FF7043"}}/>
            </Tooltip>
          )
          : (
            <Tooltip title={'Add to Save'}>
              <FavoriteBorderIcon/>
            </Tooltip>
          )}
      </IconButton>
    </div>
  )
}
