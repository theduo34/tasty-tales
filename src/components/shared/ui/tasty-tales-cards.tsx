'use client';

import Image from 'next/image';
import Rating from '@mui/material/Rating';
import {FavoriteIconStarred} from "@/components/shared/ui/buttons";
import {WhatToCookInterface} from "@/utils/faker.data";


export const WhatToCookCard = (props:  WhatToCookInterface) => {

  //Truncate the description of recipe to a given limit
  const truncateTitle = (title: string, limit = 20) => {
    const words = title.split('')
    if(words.length > limit){
      const truncated = words.slice(0, limit).join('')
      return `${truncated}...`
    }
    return title;
  }

  return(
    <div
      key={props.recipeId}
      className={"flex w-full flex-row md:flex-col items-center justify-between rounded-md gap-4 md:gap-0 shadow-md md:shadow-md"}
    >
     <div
       className={"flex w-[200px] md:w-full h-[100px] md:h-[270px] rounded-md"}
     >
       <Image
         width={100}
         height={250}
         src={props.recipeImageURL}
         alt={props.recipeName}
         className={"w-full flex rounded-md md:rounded-b-none"}
       />
     </div>
      <div
        className={"w-full flex flex-col p-1 md:p-4 rounded-md gap-1 md:gap-2"}
      >
        <h3
          className={"uppercase font-semibold"}>
          { props.recipeName }
        </h3>
        <p className={""}>
          { truncateTitle(props.recipeDescription) }
        </p>
        <div
          className={"flex w-full items-center justify-between"}>
           <Rating
             name="recipe rating"
             precision={0.5}
             value={props.recipeRatingValue}
             readOnly
           />
          <p>
            <FavoriteIconStarred
              recipeId={props.recipeId}
              savedStatus={props.savedStatus}
            />
          </p>
        </div>
      </div>
    </div>
  )
}
