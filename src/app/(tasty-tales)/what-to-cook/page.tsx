import withBaseLayout from "@/components/layout/hoc/withBaseLayout";

const WhatToCookPage = () => {
  return(
    <div className="flex items-center justify-center min-h-screen">
      <div className={"font-semibold text-md md:text-xl text-tasty-primary-500"}>
        Who To Cook? Future coming soon.
      </div>
    </div>
  )
}
export default withBaseLayout(WhatToCookPage);