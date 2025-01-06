import withBaseLayout from "@/components/layout/hoc/withBaseLayout";

const Ingredients = () => {
  return(
    <div className="flex items-center justify-center min-h-screen">
      <div className={"font-semibold text-md md:text-xl text-tasty-primary-500"}>
       Ingredients - Future coming soon.
      </div>
    </div>
  )
}
export default withBaseLayout(Ingredients);