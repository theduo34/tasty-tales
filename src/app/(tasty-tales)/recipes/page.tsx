import withBaseLayout from "@/components/layout/hoc/withBaseLayout";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Recipes"
}
const RecipesPage = () => {
  return(
    <div className="flex items-center justify-center min-h-screen">
      <div className={"font-semibold text-md md:text-xl text-tasty-primary-500"}>
        Recipes!!! Future coming soon.
      </div>
    </div>
  )
}
export default withBaseLayout(RecipesPage);