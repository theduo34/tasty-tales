import Image from 'next/image'
import SearchInput from "@/components/shared/ui/search-input";
import {DrawerMenu} from "@/components/shared/ui/drawer";
import SavedRecipe from "@/components/user/saved-recipte/saved-recipe";
import ProfileMenuPaper from "@/components/shared/ui/menu-paper";
import NavLinks from "@/components/layout/navbar/nav-links";

const TopNavbar = () => {
  return(
    <>
      <div className={"flex flex-col w-full gap-4 px-0 md:px-16"}>
        <div className={"flex w-full items-center justify-between space-x-8"}>
          {/*logo*/}
          <div>
            <Image
              src={'/Firecracker-beef-mince.webp'}
              alt={'logo'}
              width={40}
              height={10}
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
            <div className={"items-center flex md:hidden"}>
              <DrawerMenu/>
            </div>
            <div className={"items-center hidden md:flex gap-2"}>
              <SavedRecipe/>
              <div className={"border border-gray-800 rounded-full p-0.5 "}>
                <ProfileMenuPaper/>
              </div>
            </div>
          </div>
        </div>

        {/*service section*/}
        <div className={"hidden md:flex"}>
          <NavLinks/>
        </div>
      </div>
    </>
  )
}
export default TopNavbar;