import withBaseLayout from "@/components/layout/hoc/withBaseLayout";
import {Metadata} from "next";
import {WhatToCookCard} from "@/components/shared/ui/tasty-tales-cards";
import FrameLayout from "@/components/layout/base/frameLayout";
import {whatToCook} from "@/lib/faker.data";

/**
 * WhatToCookPage Component
 *
 * This page displays a list of recipe cards, allowing users to explore various recipe options.
 * The `whatToCook` data is mapped and passed to `WhatToCookCard` components, which display
 * each recipe's name, description, image, and rating.
 *
 * The page layout is responsive, adjusting the grid to fit different screen sizes,
 * and is wrapped with `FrameLayout` for consistent layout styling.
 *
 */

export const metadata: Metadata = {
  title: "What To Cook",
}

const WhatToCookPage = () => {
  return(
    <FrameLayout>
      <div
        className={
        "w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-12"
      }
      >
        {
          whatToCook.map((option) => (
            <WhatToCookCard
              key={option.recipeId}
              recipeId={option.recipeId}
              recipeName={option.recipeName}
              recipeDescription={option.recipeDescription}
              recipeImageURL={option.recipeImageURL}
              savedStatus={option.savedStatus}
              recipeRatingValue={option.recipeRatingValue}
            />
          ))
        }
      </div>
    </FrameLayout>
  )
}
export default withBaseLayout(WhatToCookPage);